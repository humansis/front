import { SelectionModel } from '@angular/cdk/collections';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { ModalAssignComponent } from 'src/app/components/modals/modal-assign/modal-assign.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { BookletService } from 'src/app/core/api/booklet.service';
import { ProjectService } from 'src/app/core/api/project.service';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { ModalService } from 'src/app/core/utils/modal.service';
import { Booklet } from 'src/app/model/booklet.new';
import { Project } from 'src/app/model/project.new';
import { LanguageService } from 'src/texts/language.service';
import { ExportService } from '../../core/api/export.service';
import { Voucher } from '../../model/voucher.new';
@Component({
    selector: 'app-vouchers',
    templateUrl: './vouchers.component.html',
    styleUrls: ['./vouchers.component.scss']
})
export class VouchersComponent implements OnInit {

    public maxHeight = 600;
    public maxWidth = 750;
    // public maxWidthFirstRow = GlobalText.maxWidthFirstRow;
    // public maxWidthSecondRow = GlobalText.maxWidthSecondRow;
    // public maxWidth = GlobalText.maxWidth;
    public heightScreen;
    public widthScreen;

    public nameComponent = 'vouchers';

    public loadingAssign = false;
    public loadingBooklet = true;
    public loadingExport = false;
    public loadingExportCodes = false;
    public load = false;

    public bookletClass = Booklet;
    public booklets: Booklet[];
    public bookletData: MatTableDataSource<Booklet>;
    public extensionType: string;
    public extensionTypeCode: string;
    public projectClass = Project;

    public projects = [];

    public selection = new SelectionModel<Voucher>(true, []);
    public checkedElements: Booklet[] = [];

    // Language
    public language = this.languageService.selectedLanguage ? this.languageService.selectedLanguage : this.languageService.english ;


    @ViewChild(TableComponent) tableVoucher: TableComponent;

    constructor(
        public bookletService: BookletService,
        public dialog: MatDialog,
        public projectService: ProjectService,
        public _exportService: ExportService,
        public snackbar: SnackbarService,
        private modalService: ModalService,
        protected languageService: LanguageService
    ) { }



    ngOnInit() {
        this.checkSize();
        this.extensionType = 'xls';

        this.getBooklets();
    }


    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.checkSize();
    }


    checkSize(): void {
        this.heightScreen = window.innerHeight;
        this.widthScreen = window.innerWidth;
    }

    setType(choice: string) {
        this.extensionType = choice;
    }

    setTypeCode(choice: string) {
        this.extensionTypeCode = choice;
    }

    getBooklets() {
        this.bookletService.get().pipe(
            finalize(
                () => {
                    this.loadingBooklet = false;
                },
            )
        ).subscribe(
            response => {
                if (response && response.length > 0) {
                    this.booklets = response.reverse().map((booklet: any) => Booklet.apiToModel(booklet));
                    this.bookletData = new MatTableDataSource(this.booklets);
                } else if (response === null) {
                    this.booklets = null;
                }
            }
        );
    }

    /**
	* open each modal dialog
	*/
    openDialog(dialogDetails: any): void {
        this.modalService.openDialog(this.bookletClass, this.bookletService, dialogDetails);
        this.modalService.isCompleted.subscribe(() => {
            this.getBooklets();
        });
    }

    openAssignDialog() {
        this.loadingAssign = true;
        this.projectService.get()
            .subscribe(
                response => {
                    this.loadingAssign = false;
                    if (response && response.length > 0) {
                        this.projects = response.reverse().map((project: any) => Project.apiToModel(project));
                        // this.projects = this.projectClass.formatArray(response).reverse();
                    } else if (response === null) {
                        this.projects = [];
                    }
                    const dialogRef = this.dialog.open(ModalAssignComponent, {
                        id: 'modal-vouchers',
                        data: {
                            projects: this.projects
                        }
                    });
                    dialogRef.afterClosed().subscribe((test) => {
                        this.getBooklets();
                        // this.tableVoucher.checkData();
                    });
                }
            );
    }

    print(event: Booklet) {
        this.snackbar.info(this.language.voucher_print_starting);

        return this._exportService.printVoucher(event.get('id'));
    }

    getChecked(event) {
        this.checkedElements = event;
    }


    printMany() {
        const bookletIds = [];
        const error = false;
        this.checkedElements.forEach((booklet: Booklet) => {
            bookletIds.push(booklet.get('id'));
        });
        return !error ? this._exportService.printManyVouchers(bookletIds) : null;
    }

    export() {
        this.loadingExport = true;
        this._exportService.export('booklets', true, this.extensionType).then(
            () => { this.loadingExport = false; }
        ).catch(
            () => { this.loadingExport = false; }
        );
      }

    exportCodes() {
        this.loadingExportCodes = true;
        this._exportService.export('bookletCodes', true, this.extensionTypeCode).then(
            () => { this.loadingExportCodes = false; }
        ).catch(
            () => { this.loadingExportCodes = false; }
        );
    }
}
