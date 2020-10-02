import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { Language } from 'src/app/core/language/language';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss'],
})
export class VendorsListComponent implements OnInit {
  language: Language = this.languageService.selectedLanguage;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}
}
