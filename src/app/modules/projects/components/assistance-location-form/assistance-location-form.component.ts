import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from '../../../../core/language/language.service';
import { distinctUntilChanged } from 'rxjs/operators';
import * as moment from 'moment';
import { LocationUtils } from 'src/app/core/utils/location-utils';

@Component({
  selector: 'app-assistance-location-form',
  templateUrl: './assistance-location-form.component.html',
  styleUrls: ['./assistance-location-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistanceLocationFormComponent implements OnInit {
  form: FormGroup;
  language = this.languageService.selectedLanguage;

  @Input()
  maxDate: Date;

  set initialData(initialData: any) {
    this.form.patchValue(
      {
        date_distribution: moment(initialData.date_distribution, 'DD-MM-YYYY').toDate(),
        location: LocationUtils.locationApiToSimple(initialData.location),
      },
      { emitEvent: false }
    );
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
      location: [],
      date_distribution: [],
    });
  }
}
