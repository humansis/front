import { Component, OnInit } from '@angular/core';
import { TableHeader } from 'src/app/models/interfaces/table-header';
import { InstitutionService } from 'src/app/core/api/institution.service';
import { Institution } from 'src/app/models/api/institution';
import { LanguageService } from 'src/app/core/language/language.service';
import { MatDialog } from '@angular/material/dialog';
import { INSTITUTION_TYPES_MAP } from 'src/app/models/constants/institution-type';
import { ClientDataSource } from 'src/app/core/datasource/client-data-source';
import { ModalDeleteComponent } from 'src/app/components/modals/modal-delete/modal-delete.component';
import { InstitutionModalComponent } from 'src/app/modules/general-settings/containers/institutions/institution-modal/institution-modal.component';

@Component({
  selector: 'app-institution-table',
  templateUrl: './institution-table.component.html',
  styleUrls: ['./institution-table.component.scss'],
})
export class InstitutionTableComponent implements OnInit {
  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'name', languageKey: 'institution_name' },
    {
      key: 'type',
      languageKey: 'type',
      transform: (value) => {
        const key = INSTITUTION_TYPES_MAP[value]
          ? INSTITUTION_TYPES_MAP[value].language_key
          : 'missingTranslation';
        return this.language[key];
      },
    },
    { key: 'contact_name', languageKey: 'institution_contact_name' },
    { key: 'contact_family_name', languageKey: 'institution_contact_family_name' },
  ];

  dataSource: ClientDataSource<Institution> = new ClientDataSource<Institution>();

  language = this.languageService.selectedLanguage;

  constructor(
    private institutionService: InstitutionService,
    private languageService: LanguageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource.loading = true;
    this.loadInstitutions();
  }

  edit(institution: Institution) {
    this.institutionService.getOne(institution.id).subscribe((apiInstitution) => {
      const dialogRef = this.dialog.open(InstitutionModalComponent, {
        data: apiInstitution,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.loadInstitutions();
        }
      });
    });
  }

  remove(institution: Institution) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      data: {
        name: this.language.institutions,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'Delete') {
        this.institutionService.delete(institution.id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(
            (item) => item.id !== institution.id
          );
        });
      }
    });
  }

  loadInstitutions() {
    this.institutionService.get().subscribe(
      ([total, institutions]: [number, Institution[]]) => {
        this.dataSource.loading = false;
        this.dataSource.data = institutions;
      },
      (error) => {
        this.dataSource.loading = false;
      }
    );
  }
}
