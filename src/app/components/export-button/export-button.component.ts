import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { ExportService } from 'src/app/core/api/export.service';

@Component({
  selector: 'app-export-button',
  templateUrl: './export-button.component.html',
  styleUrls: ['./export-button.component.scss'],
})
export class ExportButtonComponent implements OnInit {
  @Input() type: string;

  loadingExport = false;
  extensionType: string;
  language = this.languageService.selectedLanguage;

  constructor(
    private languageService: LanguageService,
    private exportService: ExportService
  ) {}

  ngOnInit(): void {}

  export() {
    this.loadingExport = true;
    this.exportService.export(this.type, true, this.extensionType).subscribe(
      () => {
        this.loadingExport = false;
      },
      (_error: any) => {
        this.loadingExport = false;
      }
    );
  }
}
