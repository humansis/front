import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/core/language/language.service';
import { Sector, Subsector } from 'src/app/models/api/sector';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import * as moment from 'moment';
import { LocationUtils } from '../../../../core/utils/location-utils';

@Component({
  selector: 'app-assistance-parameters-form',
  templateUrl: './assistance-parameters-form.component.html',
  styleUrls: ['./assistance-parameters-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistanceParametersFormComponent implements OnInit {
  @Input()
  sectors: Sector[];

  @Output()
  dataChanged: EventEmitter<any> = new EventEmitter<any>();

  subsectors: Subsector[];
  assistanceTypes: string[];
  targetTypes: string[];
  form: FormGroup;
  language = this.languageService.selectedLanguage;

  set initialData(initialData: any) {
    this.form.patchValue(initialData, { emitEvent: false });
    this.onSectorChange(initialData?.sector);
    this.form.patchValue({ subsector: initialData?.subsector }, { emitEvent: false });
  }

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.form.get('sector').valueChanges.subscribe((value) => this.onSectorChange(value));

    this.form
      .get('subsector')
      .valueChanges.subscribe((value) => this.onSubSectorChange(value));

    this.form.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => this.dataChanged.emit(value));
  }

  private onSectorChange(value) {
    if (this.sectors) {
      const sector = this.sectors.find((item) => item.id === value);
      if (sector) {
        if (sector.subsectors && sector.subsectors.length > 0) {
          this.form.get('subsector').enable();
          this.subsectors = sector.subsectors;
          this.form.patchValue({
            subsector:
              sector.subsectors && sector.subsectors.length > 0
                ? sector.subsectors[0].id
                : undefined,
          });
        } else {
          this.form.get('subsector').disable();
          this.subsectors = undefined;
          this.form.patchValue({ subSector: undefined });
        }
      }
    }
  }

  private onSubSectorChange(value) {
    if (this.subsectors) {
      const subsector = this.subsectors.find((item) => item.id === value);
      if (subsector) {
        this.assistanceTypes = [...subsector.assistanceTypes];
        this.targetTypes = subsector.availableTargets;
        this.form.patchValue({
          assistance_type:
            subsector.assistanceTypes && subsector.assistanceTypes.length > 0
              ? this.assistanceTypes[0]
              : undefined,
          target_type:
            this.targetTypes && this.targetTypes.length > 0
              ? this.targetTypes[0]
              : undefined,
        });
      }
      this.form.get('assistance_type').enable();
      this.form.get('target_type').enable();
    } else {
      this.form.get('assistance_type').disable();
      this.form.get('target_type').disable();
    }
  }

  private createForm() {
    return this.fb.group({
      sector: [undefined, Validators.required],
      subsector: [undefined, Validators.required],
      assistance_type: [undefined, Validators.required],
      target_type: [undefined, Validators.required],
    });
  }
}
