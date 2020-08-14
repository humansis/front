import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CARD_TYPES } from 'src/app/models/constants/card-type';
import { PHONECODES } from 'src/app/models/constants/phone-codes';
import { LanguageService } from 'src/app/core/language/language.service';
import { Community } from 'src/app/models/api/community';

@Component({
  selector: 'app-community-form',
  templateUrl: './community-form.component.html',
  styleUrls: ['./community-form.component.scss'],
})
export class CommunityFormComponent implements OnInit {
  public language = this.languageService.selectedLanguage;

  public form: FormGroup;

  public readonly cardTypes = CARD_TYPES;

  public readonly phoneCodes = PHONECODES;

  private communityId: number;

  @Input()
  set data(community: Community) {
    if (community) {
      this.communityId = community.id;
      this.form.patchValue(community, { emitEvent: false });
    }
  }

  @Output()
  save: EventEmitter<Community> = new EventEmitter<Community>();

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.createForm();
  }

  ngOnInit(): void {}

  processForm() {
    if (this.form.valid) {
      this.save.emit({ ...this.form.value, id: this.communityId });
    }
  }

  private createForm() {
    this.form = this.fb.group({
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
