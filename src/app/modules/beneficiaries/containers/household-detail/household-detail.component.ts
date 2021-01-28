import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/language/language';
import { LanguageService } from 'src/app/core/language/language.service';
import { BeneficiariesService } from 'src/app/core/api/beneficiaries.service';
import { HouseholdsService } from 'src/app/core/api/households.service';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/core/utils/form.service';

@Component({
  selector: 'app-household-detail',
  templateUrl: './household-detail.component.html',
  styleUrls: ['./household-detail.component.scss'],
})
export class HouseholdDetailComponent implements OnInit {
  householdId: number;
  household$: any;

  language = this.languageService.selectedLanguage;

  constructor(
    private route: ActivatedRoute,
    private householdService: HouseholdsService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.householdId = +params.get('id');
        this.household$ = this.householdService.getOne(this.householdId);
      }
    });
  }
}
