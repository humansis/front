import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CARD_TYPES } from 'src/app/models/constants/card-type';
import { INSTITUTION_TYPES } from 'src/app/models/constants/institution-type';
import { Institution } from 'src/app/models/api/institution';
import { PHONECODES } from 'src/app/models/constants/phone-codes';

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

  private institutionId: number;

  @Input()
  set data(institution: Institution) {
    if (institution) {
      this.institutionId = institution.id;
      this.form.patchValue(institution, { emitEvent: false });
    }
  }

  @Output()
  save: EventEmitter<Institution> = new EventEmitter<Institution>();

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
      type: [],
      address: this.fb.group({
        number: [],
        street: [],
        postcode: [],
        location: [],
      }),
      contact_name: [],
      contact_family_name: [],
      phone_prefix: [],
      phone_number: [],
      national_id: this.fb.group({
        type: [],
        number: [],
      }),
    });
  }
}
