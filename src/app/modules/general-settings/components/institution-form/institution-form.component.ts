import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CARD_TYPES } from 'src/app/models/constants/card-type';
import { INSTITUTION_TYPES } from 'src/app/models/constants/institution-type';
import { Institution } from 'src/app/models/api/institution';
import { PHONECODES } from 'src/app/models/constants/phone-codes';
import { Project } from 'src/app/models/api/project';
import { PhoneType } from 'src/app/models/constants/phone-type';

@Component({
  selector: 'app-institution-form',
  templateUrl: './institution-form.component.html',
  styleUrls: ['./institution-form.component.scss'],
})
export class InstitutionFormComponent implements OnInit {
  public language = this.languageService.selectedLanguage;

  public form: FormGroup;

  public readonly cardTypes = CARD_TYPES;

  public readonly institutionTypes = INSTITUTION_TYPES;

  public readonly phoneCodes = PHONECODES;

  public readonly phoneTypes = Object.keys(PhoneType).map((item) => ({
    id: PhoneType[item],
    name: this.language['phone_type_' + item.toLocaleLowerCase()],
  }));

  @Input()
  projects: Project[] = [];

  @Input()
  set data(institution: Institution) {
    if (institution) {
      this.institutionId = institution.id;
      const formData = { ...institution };
      if (formData.national_id === null) {
        delete formData.national_id;
      }
      this.form.patchValue(formData, { emitEvent: false });
    }
  }

  @Output()
  save: EventEmitter<Institution> = new EventEmitter<Institution>();

  private institutionId: number;

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.createForm();
  }

  ngOnInit(): void {}

  processForm() {
    if (this.form.valid) {
      this.save.emit({ ...this.form.value, id: this.institutionId });
    }
  }

  private createForm() {
    this.form = this.fb.group({
      name: [undefined],
      type: [undefined, Validators.required],
      projects: [[], Validators.required],
      address: this.fb.group({
        number: [],
        street: [],
        postcode: [],
        location: [],
      }),
      contact_name: [],
      contact_family_name: [],
      phone_prefix: [],
      phone_type: [],
      phone_number: [],
      national_id: this.fb.group({
        type: [],
        number: [],
      }),
      latitude: [
        undefined,
        [
          Validators.min(-90),
          Validators.max(90),
          Validators.pattern('\\d+((\\.|,)\\d+)?'),
        ],
      ],
      longitude: [
        undefined,
        [
          Validators.min(-180),
          Validators.max(180),
          Validators.pattern('\\d+((\\.|,)\\d+)?'),
        ],
      ],
    });
  }
}
