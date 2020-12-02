import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Commodity } from '../../../../models/commodity';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayType } from '../../../../models/constants/screen-sizes';
import { LanguageService } from '../../../../core/language/language.service';
import { ClientDataSource } from '../../../../core/datasource/client-data-source';

@Component({
  selector: 'app-assistance-commodity-group',
  templateUrl: './assistance-commodity-group.component.html',
  styleUrls: ['./assistance-commodity-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistanceCommodityGroupComponent implements OnInit {
  @Input()
  currentDisplayType: DisplayType;

  @Input()
  reachedBeneficiaries = 0;

  @Input()
  commoditiesDataSource: MatTableDataSource<Commodity> = new ClientDataSource([]);

  @Output()
  addClick: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output()
  removeClick: EventEmitter<Commodity> = new EventEmitter<Commodity>();

  language = this.languageService.selectedLanguage;
  public commodityClass = Commodity;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}
}
