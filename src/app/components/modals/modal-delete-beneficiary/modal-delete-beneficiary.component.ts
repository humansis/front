import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageService } from 'src/app/core/language/language.service';
import { FormControl, Validators } from '@angular/forms';
import { BeneficiariesService } from 'src/app/core/api/beneficiaries.service';

@Component({
  selector: 'app-modal-delete-beneficiary',
  templateUrl: './modal-delete-beneficiary.component.html',
  styleUrls: ['../modal.component.scss', './modal-delete-beneficiary.component.scss'],
})
export class ModalDeleteBeneficiaryComponent {
  // Language
  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  public justification = new FormControl('', [Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      distributionId: number;
      beneficiaryId: number;
    },
    public modalReference: MatDialogRef<any>,
    public languageService: LanguageService,
    private beneficiariesService: BeneficiariesService
  ) {}

  onDelete(): any {
    this.beneficiariesService
      .delete(this.data.beneficiaryId, this.data.distributionId, this.justification.value)
      .subscribe(
        (response) => {
          this.modalReference.close({
            method: 'DeleteBeneficiary',
            response,
            success: true,
          });
        },
        () => {
          this.modalReference.close({
            method: 'DeleteBeneficiary',
            success: false,
          });
        }
      );
  }

  onCancel() {
    this.modalReference.close('Cancel');
  }
}
