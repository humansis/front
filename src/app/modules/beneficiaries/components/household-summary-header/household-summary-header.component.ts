import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { Language } from 'src/app/core/language/language';

@Component({
  selector: 'app-household-summary-header',
  templateUrl: './household-summary-header.component.html',
  styleUrls: ['./household-summary-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdSummaryHeaderComponent implements OnInit {
  @Input() household: any;

  language: Language = this.languageService.selectedLanguage;
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  getHouseholdHead() {
    if (this.household && this.household.beneficiaries) {
      return this.household.beneficiaries.find((item) => item.status);
    }
  }
}
