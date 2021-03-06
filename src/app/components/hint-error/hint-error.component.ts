import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/core/language/language.service';
import { CustomModelField } from 'src/app/models/custom-models/custom-model-field';

@Component({
  selector: 'app-hint-error',
  templateUrl: './hint-error.component.html',
  styleUrls: ['./hint-error.component.scss'],
})
export class HintErrorComponent implements OnInit {
  constructor(public languageService: LanguageService) {}

  @Input() isMatField: boolean;
  @Input() form: FormGroup;
  @Input() fieldName: string;
  @Input() field: CustomModelField<any>;

  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  ngOnInit() {}

  hasError(type) {
    if (
      this.form.controls[this.fieldName] &&
      this.form.controls[this.fieldName].hasError(type)
    ) {
      return this.form.controls[this.fieldName].touched;
    }
    if (
      this.form.controls[this.fieldName + '0'] &&
      this.form.controls[this.fieldName + '0'].hasError(type)
    ) {
      return this.form.controls[this.fieldName + '0'].touched;
    }
    return false;
  }
}
