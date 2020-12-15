import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Criteria as ModelCriteria } from '../../../../models/criteria';
import { LanguageService } from '../../../../core/language/language.service';
import { DisplayType } from 'src/app/models/constants/screen-sizes';

@Component({
  selector: 'app-assistance-criteria-group',
  templateUrl: './assistance-criteria-group.component.html',
  styleUrls: ['./assistance-criteria-group.component.scss'],
})
export class AssistanceCriteriaGroupComponent implements OnInit {
  language = this.languageService.selectedLanguage;

  public criteriaClass = ModelCriteria;

  @Input()
  name: string;

  @Input()
  targetType: string;

  @Input()
  data: MatTableDataSource<ModelCriteria>;

  @Input()
  reachedBeneficiaries: number;
  @Input()
  currentDisplayType: DisplayType;

  @Output()
  addClick: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output()
  detailsClick: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output()
  removeClick: EventEmitter<ModelCriteria> = new EventEmitter<ModelCriteria>();
  @Output()
  removeGroupClick: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  onOpenModal(event: any) {
    if (event.action === 'delete') {
      this.removeClick.emit(event.element);
    }
  }
}
