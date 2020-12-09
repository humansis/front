import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LanguageService } from 'src/app/core/language/language.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-assitance-activity-description-form',
  templateUrl: './assitance-activity-description-form.component.html',
  styleUrls: ['./assitance-activity-description-form.component.scss'],
})
export class AssitanceActivityDescriptionFormComponent implements OnInit {
  form: FormGroup;
  language = this.languageService.selectedLanguage;

  @Input()
  set targetType(targetType: string) {
    if (targetType === 'household' || targetType === 'individual') {
      this.form.removeControl('households_targeted');
      this.form.removeControl('individuals_targeted');
      this.dataChanged.emit({
        description: this.form.get('description').value,
        households_targeted: null,
        individuals_targeted: null,
      });
    } else {
      if (!this.form.get('households_targeted')) {
        this.form.addControl('households_targeted', new FormControl());
      }
      if (!this.form.get('individuals_targeted')) {
        this.form.addControl('individuals_targeted', new FormControl());
      }
    }
  }

  @Output()
  dataChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => this.dataChanged.emit(value));
  }

  private createForm() {
    return this.fb.group({
      description: [],
      households_targeted: [],
      individuals_targeted: [],
    });
  }
}
