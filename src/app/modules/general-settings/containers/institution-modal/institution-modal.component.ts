import { Component, Inject, OnInit } from '@angular/core';
import { LanguageService } from '../../../../core/language/language.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Institution } from '../../../../models/api/institution';
import { InstitutionService } from '../../../../core/api/institution.service';
import { SnackBarHarnessFilters } from '@angular/material/snack-bar/testing';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';

@Component({
  selector: 'app-institution-modal',
  templateUrl: './institution-modal.component.html',
  styleUrls: ['./institution-modal.component.scss'],
})
export class InstitutionModalComponent implements OnInit {
  language = this.languageService.selectedLanguage;

  constructor(
    public dialogRef: MatDialogRef<InstitutionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Institution,
    private languageService: LanguageService,
    private institutionService: InstitutionService,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  onSave(institution: Institution) {
    if (institution.id) {
      this.institutionService.update(institution.id, institution).subscribe(() => {
        this.snackBarService.success(
          `${this.language.institutions} ${this.language.snackbar_updated_successfully}`
        );
        this.dialogRef.close(true);
      });
    } else {
      this.institutionService.create(institution).subscribe(() => {
        this.snackBarService.success(
          `${this.language.institutions} ${this.language.snackbar_created_successfully}`
        );
        this.dialogRef.close(true);
      });
    }
  }
  onCancel() {
    this.dialogRef.close(false);
  }
}
