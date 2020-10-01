import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/core/language/language.service';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { ModalConfirmationComponent } from 'src/app/components/modals/modal-confirmation/modal-confirmation.component';
import { ImportService } from 'src/app/core/api/beneficiaries-import.service';

@Component({
  selector: 'app-data-mapping',
  templateUrl: './data-mapping.component.html',
  styleUrls: ['./data-mapping.component.scss'],
})
export class DataMappingComponent implements OnInit {
  nextStep: boolean;
  header: Array<any> = [];
  data: Array<any>;
  tmpFile: string;
  mapping: object = {};
  mappingColumns: object = {};
  staticMappingColumns: object = {};

  public loading = false;
  public objectKeys = Object.keys;

  //
  // ─── INIT ───────────────────────────────────────────────────────────────────────
  //

  // Language
  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  constructor(
    private importService: ImportService,
    private router: Router,
    private snackbar: SnackbarService,
    public dialog: MatDialog,
    private languageService: LanguageService
  ) {}

  public ngOnInit() {
    try {
      const response = this.importService.getResponse();
      this.data = response.data;
      this.header = response.header;
      this.tmpFile = response.tmpFile;
      this.mapping = response.mapping;
      this.mappingColumns = this.reverseMappingColumns(response.mapping);
      this.staticMappingColumns = this.reverseMappingColumns(response.mapping);
    } catch (error) {
      this.snackbar.error(this.language.beneficiary_import_error_importing);
      this.router.navigate(['beneficiaries/import']);
    }
  }

  public importMapping() {
    this.loading = true;
    const mapping = this.reverseMappingFields(this.mappingColumns);
    this.importService.sendStepUserData({ mapping, tmpFile: this.tmpFile }).subscribe(
      (response: any) => {
        this.loading = false;
        this.nextStep = true;
        this.importService.setResponse(response);
        this.router.navigate(['/beneficiaries/import/data-validation']);
      },
      (_error: any) => {
        this.loading = false;
      }
    );
  }

  public cancel() {
    this.nextStep = true;
    this.router.navigate(['/beneficiaries/import']);
  }

  public onMappingChange(column: string, value: any) {
    this.mappingColumns[column] = value;
  }

  public getMappingLabel(field: string) {
    if (field.indexOf('.') === -1) {
      return field;
    } else {
      const fields = field.split('.');
      return fields[1];
    }
  }

  /**
   * Reverse field and column of mapping data
   * const mapping = {
   *     'address_street': 'A',
   *     'address_number': 'B',
   *     ...
   *     'beneficiaries': {
   *         'local_given_name': 'Q',
   *         'local_family_name': 'R',
   *         ...
   *     }
   * };
   *
   * @param {Object} mapping
   * @returns {Object}
   */
  private reverseMappingColumns(mapping: object): object {
    const mappingColumns = {};
    Object.keys(mapping).forEach((fieldName: string) => {
      const column = mapping[fieldName];
      if (typeof column === 'object') {
        Object.keys(column).forEach((subFieldName: string) => {
          const subColumn = column[subFieldName];
          mappingColumns[subColumn] = `${fieldName}.${subFieldName}`;
        });
      } else {
        mappingColumns[column] = fieldName;
      }
    });
    return mappingColumns;
  }

  /**
   * Reverse field and column of mapping data
   * const mappingColumns = {
   *     'A': 'address_street',
   *     'B': 'address_number',
   *     ...
   *     'Q': 'beneficiaries.local_given_name',
   *     'R': 'beneficiaries.local_family_name',
   *     ...
   * };
   *
   * @param {Object} mappingColumns
   * @returns {Object}
   */
  private reverseMappingFields(mappingColumns: object): object {
    const mapping = {};
    Object.keys(mappingColumns).forEach((column: string) => {
      const field = mappingColumns[column];
      if (field !== undefined && field !== '') {
        if (field.indexOf('.') === -1) {
          mapping[field] = column;
        } else {
          const fields = field.split('.');
          const mainField = fields[0];
          const subField = fields[1];

          if (mapping[mainField] === undefined) {
            mapping[mainField] = {};
          }
          mapping[mainField][subField] = column;
        }
      }
    });
    return mapping;
  }

  //
  // ─── LEAVE CONFIRMATION ─────────────────────────────────────────────────────────
  //

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    if (this.nextStep) {
      return true;
    }
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      data: {
        title: this.language.modal_leave,
        sentence: this.language.modal_leave_sentence,
        ok: this.language.modal_leave,
      },
    });

    return dialogRef.afterClosed();
  }
}
