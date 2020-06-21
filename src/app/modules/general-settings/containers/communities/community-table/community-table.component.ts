import { Component, OnInit } from '@angular/core';
import { TableHeader } from 'src/app/models/interfaces/table-header';
import { ClientDataSource } from 'src/app/core/datasource/client-data-source';
import { LanguageService } from 'src/app/core/language/language.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from 'src/app/components/modals/modal-delete/modal-delete.component';
import { Community } from 'src/app/models/api/community';
import { CommunityService } from 'src/app/core/api/community.service';
import { CommunityModalComponent } from 'src/app/modules/general-settings/containers/communities/community-modal/community-modal.component';

@Component({
  selector: 'app-community-table',
  templateUrl: './community-table.component.html',
  styleUrls: ['./community-table.component.scss'],
})
export class CommunityTableComponent implements OnInit {
  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'name', languageKey: 'institution_name' },
    { key: 'contact_name', languageKey: 'institution_contact_name' },
    { key: 'contact_family_name', languageKey: 'institution_contact_family_name' },
  ];

  dataSource: ClientDataSource<Community> = new ClientDataSource<Community>();

  language = this.languageService.selectedLanguage;

  constructor(
    private communityService: CommunityService,
    private languageService: LanguageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource.loading = true;
    this.loadCommunities();
  }

  edit(community: Community) {
    this.communityService.getOne(community.id).subscribe((apiCommunity) => {
      const dialogRef = this.dialog.open(CommunityModalComponent, {
        data: apiCommunity,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.loadCommunities();
        }
      });
    });
  }

  remove(community: Community) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      data: {
        name: this.language.communities,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'Delete') {
        this.communityService.delete(community.id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(
            (item) => item.id !== community.id
          );
        });
      }
    });
  }

  loadCommunities() {
    this.communityService.get().subscribe(
      ([total, communities]: [number, Community[]]) => {
        this.dataSource.loading = false;
        this.dataSource.data = communities;
      },
      (error) => {
        this.dataSource.loading = false;
      }
    );
  }
}
