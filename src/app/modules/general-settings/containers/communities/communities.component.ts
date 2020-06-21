import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DisplayType } from 'src/app/models/constants/screen-sizes';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/language/language.service';
import { ScreenSizeService } from 'src/app/core/screen-size/screen-size.service';
import { InstitutionService } from 'src/app/core/api/institution.service';
import { UserService } from 'src/app/core/api/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CommunityTableComponent } from 'src/app/modules/general-settings/containers/communities/community-table/community-table.component';
import { CommunityModalComponent } from 'src/app/modules/general-settings/containers/communities/community-modal/community-modal.component';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss'],
})
export class CommunitiesComponent implements OnInit, OnDestroy {
  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  public currentDisplayType: DisplayType;
  private screenSizeSubscription: Subscription;

  @ViewChild(CommunityTableComponent) communityTable: CommunityTableComponent;

  constructor(
    private languageService: LanguageService,
    private screenSizeService: ScreenSizeService,
    private institutionService: InstitutionService,
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.screenSizeSubscription = this.screenSizeService.displayTypeSource.subscribe(
      (displayType: DisplayType) => {
        this.currentDisplayType = displayType;
      }
    );
  }

  openModal() {
    const dialogRef = this.dialog.open(CommunityModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.communityTable.loadCommunities();
      }
    });
  }

  ngOnInit(): void {}

  checkRights(): boolean {
    return this.userService.hasRights('ROLE_DISTRIBUTIONS_DIRECTOR');
  }

  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }
}
