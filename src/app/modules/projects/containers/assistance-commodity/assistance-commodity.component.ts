import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../../../core/language/language.service';
import { ScreenSizeService } from '../../../../core/screen-size/screen-size.service';
import { Observable } from 'rxjs';
import { DisplayType } from '../../../../models/constants/screen-sizes';
import { ClientDataSource } from '../../../../core/datasource/client-data-source';
import { ModalService } from '../../../../core/utils/modal.service';
import { Commodity } from '../../../../models/commodity';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assistance-commodity',
  templateUrl: './assistance-commodity.component.html',
  styleUrls: ['./assistance-commodity.component.scss'],
})
export class AssistanceCommodityComponent implements OnInit {
  @Input()
  reachedBeneficiaries = 0;
  @Output()
  commoditiesChanged: EventEmitter<any> = new EventEmitter<any>();

  displayType$: Observable<DisplayType>;

  language = this.languageService.selectedLanguage;
  commoditiesDataSource: MatTableDataSource<Commodity> = new ClientDataSource([]);

  set initialData(initialData: Commodity[]) {
    this.commoditiesDataSource = new ClientDataSource(initialData);
    this.notifyCommodityChanged();
  }

  constructor(
    private languageService: LanguageService,
    private screenSizeService: ScreenSizeService,
    private modalService: ModalService
  ) {
    this.displayType$ = this.screenSizeService.displayTypeSource.asObservable();
  }

  ngOnInit(): void {}

  addCommodity() {
    this.modalService.openAddCommodityDialog().subscribe((commodity: Commodity) => {
      if (commodity) {
        this.commoditiesDataSource = new ClientDataSource([
          ...this.commoditiesDataSource.data,
          commodity,
        ]);
        this.notifyCommodityChanged();
      }
    });
  }

  removeCommodity(commodity: Commodity) {
    this.commoditiesDataSource.data = this.commoditiesDataSource.data.filter(
      (item) => item !== commodity
    );
    this.notifyCommodityChanged();
  }

  private notifyCommodityChanged() {
    this.commoditiesChanged.emit(
      this.commoditiesDataSource.data.map((item) => item.modelToApi())
    );
  }
}
