import { AbstractControl, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static locationFirstLevelAreaRequired(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value?.adm1 !== null ? null : { required: control.value };
  }
}
