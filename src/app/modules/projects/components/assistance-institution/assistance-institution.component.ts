import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Institution } from 'src/app/models/api/institution';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from '../../../../core/language/language.service';
import { Language } from '../../../../core/language/language';

@Component({
  selector: 'app-assistance-institution',
  templateUrl: './assistance-institution.component.html',
  styleUrls: ['./assistance-institution.component.scss'],
})
export class AssistanceInstitutionComponent implements OnInit {
  @Input()
  set institutions(institutions: Institution[]) {
    if (institutions) {
      this._institutions = [...institutions];
      this.filteredInstitutions = [...institutions];
    }
  }

  @Input()
  loading = false;
  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  institutionsChanged: EventEmitter<number[]> = new EventEmitter<number[]>();

  searchInput$ = new Subject<string>();
  form: FormGroup;
  filteredInstitutions: Institution[] = [];
  language: Language = this.languageService.selectedLanguage;

  private _institutions = [];

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.form = this.createForm();
    this.form.controls.institution.valueChanges.subscribe((value) =>
      this.institutionsChanged.emit(value)
    );
  }

  ngOnInit(): void {
    this.searchInput$
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((text) => {
        this.searchText.emit(text);
        if (text) {
          this.filteredInstitutions = this._institutions.filter(
            (item) => item.name.indexOf(text) >= 0
          );
        } else {
          this.filteredInstitutions = [...this._institutions];
        }
      });
  }

  private createForm() {
    return this.fb.group({
      institution: [],
    });
  }
}
