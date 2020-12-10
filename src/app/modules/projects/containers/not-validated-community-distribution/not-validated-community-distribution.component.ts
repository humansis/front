import { Component, Input, OnInit } from '@angular/core';
import { TableHeader } from '../../../../models/interfaces/table-header';
import { ClientDataSource } from '../../../../core/datasource/client-data-source';
import { Community } from '../../../../models/api/community';
import { CommunityService } from '../../../../core/api/community.service';
import { LanguageService } from '../../../../core/language/language.service';
import { MatDialog } from '@angular/material/dialog';
import { DistributionService } from 'src/app/core/api/distribution.service';
import { ModalDeleteBeneficiaryComponent } from 'src/app/components/modals/modal-delete-beneficiary/modal-delete-beneficiary.component';

@Component({
  selector: 'app-not-validated-community-distribution',
  templateUrl: './not-validated-community-distribution.component.html',
  styleUrls: ['./not-validated-community-distribution.component.scss'],
})
export class NotValidatedCommunityDistributionComponent implements OnInit {
  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'name', languageKey: 'institution_name' },
    { key: 'contact_name', languageKey: 'institution_contact_name' },
    { key: 'contact_family_name', languageKey: 'institution_contact_family_name' },
  ];

  @Input()
  set distributionId(distributionId: number) {
    this._distributionId = distributionId;
    if (distributionId) {
      this.loadCommunities(distributionId);
    }
  }

  private _distributionId: number;

  dataSource: ClientDataSource<Community> = new ClientDataSource<Community>([]);

  language = this.languageService.selectedLanguage;

  constructor(
    private distributionService: DistributionService,
    private languageService: LanguageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  remove(community: Community) {
    const ref = this.dialog.open(ModalDeleteBeneficiaryComponent, {
      data: {
        name: community.name,
        distributionId: this._distributionId,
        beneficiaryId: community.id,
      },
    });
    ref.afterClosed().subscribe((response) => {
      if (response !== 'Cancel') {
        this.loadCommunities(this._distributionId);
      }
    });
  }

  loadCommunities(id: number) {
    this.dataSource.loading = true;
    this.distributionService.getCommunities(id).subscribe(
      (distributions) => {
        this.dataSource.loading = false;
        this.dataSource.data = distributions.map((item) => {
          return {
            ...item.community,
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
