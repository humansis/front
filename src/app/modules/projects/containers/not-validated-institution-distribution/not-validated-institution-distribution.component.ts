import { Component, Input, OnInit } from '@angular/core';
import { TableHeader } from '../../../../models/interfaces/table-header';
import { ClientDataSource } from '../../../../core/datasource/client-data-source';
import { Institution } from '../../../../models/api/institution';
import { INSTITUTION_TYPES_MAP } from '../../../../models/constants/institution-type';
import { InstitutionService } from '../../../../core/api/institution.service';
import { LanguageService } from '../../../../core/language/language.service';
import { MatDialog } from '@angular/material/dialog';
import { DistributionService } from 'src/app/core/api/distribution.service';
import { ModalDeleteBeneficiaryComponent } from 'src/app/components/modals/modal-delete-beneficiary/modal-delete-beneficiary.component';

@Component({
  selector: 'app-not-validated-institution-distribution',
  templateUrl: './not-validated-institution-distribution.component.html',
  styleUrls: ['./not-validated-institution-distribution.component.scss'],
})
export class NotValidatedInstitutionDistributionComponent implements OnInit {
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

  dataSource: ClientDataSource<Institution> = new ClientDataSource<Institution>([]);

  language = this.languageService.selectedLanguage;

  private _distributionId: number;

  @Input()
  set distributionId(distributionId: number) {
    if (distributionId) {
      this.loadInstitutions(distributionId);
    }
    this._distributionId = distributionId;
  }

  constructor(
    private distributionService: DistributionService,
    private languageService: LanguageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  remove(institution: Institution) {
    const ref = this.dialog.open(ModalDeleteBeneficiaryComponent, {
      data: {
        name: institution.name,
        distributionId: this._distributionId,
        beneficiaryId: institution.id,
      },
    });
    ref.afterClosed().subscribe((response) => {
      if (response !== 'Cancel') {
        this.loadInstitutions(this._distributionId);
      }
    });
  }

  loadInstitutions(id: number) {
    this.dataSource.loading = true;
    this.distributionService.getInstitutions(id).subscribe(
      (distributions) => {
        this.dataSource.loading = false;
        this.dataSource.data = distributions.map((item) => {
          return {
            ...item.institution,
            removed: item.removed,
          };
        });
      },
      (error) => {
        this.dataSource.loading = false;
      }
    );
  }
}
