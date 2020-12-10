import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Institution } from 'src/app/models/api/institution';
import { LanguageService } from 'src/app/core/language/language.service';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { Community } from 'src/app/models/api/community';
import { CommunityService } from 'src/app/core/api/community.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/api/project';
import { ProjectService } from 'src/app/core/api/project.service';

@Component({
  selector: 'app-community-modal',
  templateUrl: './community-modal.component.html',
  styleUrls: ['./community-modal.component.scss'],
})
export class CommunityModalComponent implements OnInit {
  language = this.languageService.selectedLanguage;

  projects$: Observable<Project[]>;

  constructor(
    public dialogRef: MatDialogRef<CommunityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Community,
    private languageService: LanguageService,
    private communityService: CommunityService,
    private snackBarService: SnackbarService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.get();
  }

  onSave(community: Community) {
    if (community.id) {
      this.communityService.update(community.id, community).subscribe(() => {
        this.snackBarService.success(`${this.language.snackbar_updated_successfully}`);
        this.dialogRef.close(true);
      });
    } else {
      this.communityService.create(community).subscribe(() => {
        this.snackBarService.success(`${this.language.snackbar_created_successfully}`);
        this.dialogRef.close(true);
      });
    }
  }
  onCancel() {
    this.dialogRef.close(false);
  }
}
