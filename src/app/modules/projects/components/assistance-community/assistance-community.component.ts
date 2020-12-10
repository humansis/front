import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Community } from 'src/app/models/api/community';
import { LanguageService } from '../../../../core/language/language.service';
import { Language } from '../../../../core/language/language';

@Component({
  selector: 'app-assistance-community',
  templateUrl: './assistance-community.component.html',
  styleUrls: ['./assistance-community.component.scss'],
})
export class AssistanceCommunityComponent implements OnInit {
  @Input()
  set communities(communities: Community[]) {
    if (communities) {
      this._communitites = [...communities];
      this.filteredCommunities = [...communities];
    }
  }
  @Input()
  loading = false;
  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  communitiesChanged: EventEmitter<number[]> = new EventEmitter<number[]>();

  searchInput$ = new Subject<string>();
  form: FormGroup;
  filteredCommunities = [];
  language: Language = this.languageService.selectedLanguage;

  private _communitites = [];

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
    this.form = this.createForm();
    this.form.controls.community.valueChanges.subscribe((value) =>
      this.communitiesChanged.emit(value)
    );
  }

  ngOnInit(): void {
    this.searchInput$
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((text) => {
        this.searchText.emit(text);
        if (text) {
          this.filteredCommunities = this._communitites.filter(
            (item) => item.name.indexOf(text) >= 0
          );
        } else {
          this.filteredCommunities = [...this._communitites];
        }
      });
  }

  private createForm() {
    return this.fb.group({
      community: [],
    });
  }
}
