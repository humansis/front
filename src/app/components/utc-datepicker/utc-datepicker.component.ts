import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-utc-datepicker',
  templateUrl: './utc-datepicker.component.html',
  styleUrls: ['./utc-datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UtcDatepickerComponent),
      multi: true,
    },
  ],
})
export class UtcDatepickerComponent implements OnInit, ControlValueAccessor {
  @Input() showDatePickerOnFieldClick = false;
  @Input() disabled = false;
  @Input() placeholder: string;
  @Input() max: Date;
  @Input() showError = false;
  @Input() errorText: string;

  value: any;

  onChange: (value: any) => void = () => {};
  onTouched: (value: any) => void = () => {};

  constructor() {}

  ngOnInit() {}

  dateChange({ value }) {
    setTimeout(() => {
      this.value = value ? new Date(value) : undefined;
      if (this.value) {
        this.onTouched(this.value);
      }
      if (this.value instanceof Date) {
        this.onChange(
          new Date(this.value.getTime() - this.value.getTimezoneOffset() * 60 * 1000)
        );
      } else if (this.value !== undefined) {
        // This condition is because if undefined is default value it will trigger dirty check and show error message
        this.onChange(this.value);
      }
    });
  }

  writeValue(val: any): void {
    if (val) {
      if (val instanceof Date) {
        this.value = new Date(val.getTime() + val.getTimezoneOffset() * 60 * 1000);
      } else {
        this.value = val;
      }
    }
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
