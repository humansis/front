import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Language } from 'src/app/core/language/language';
import { LanguageService } from 'src/app/core/language/language.service';

@Component({
  selector: 'app-household-location',
  templateUrl: './household-location.component.html',
  styleUrls: ['./household-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseholdLocationComponent implements OnInit {
  @Input() address: any;
  @Input() locationGroup: string;
  language: Language = this.languageService.selectedLanguage;
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}
}
