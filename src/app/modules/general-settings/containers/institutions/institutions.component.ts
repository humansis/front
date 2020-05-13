import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { DisplayType } from 'src/app/models/constants/screen-sizes';
import { ScreenSizeService } from 'src/app/core/screen-size/screen-size.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/api/user.service';
import { InstitutionService } from 'src/app/core/api/institution.service';
import { MatDialog } from '@angular/material/dialog';
import { InstitutionModalComponent } from '../institution-modal/institution-modal.component';
import { InstitutionTableComponent } from 'src/app/modules/general-settings/components/institution-table/institution-table.component';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit, OnDestroy {
  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  public currentDisplayType: DisplayType;
  private screenSizeSubscription: Subscription;

  @ViewChild(InstitutionTableComponent) institutionTable: InstitutionTableComponent;

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
    const dialogRef = this.dialog.open(InstitutionModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.institutionTable.loadInstitutions();
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
