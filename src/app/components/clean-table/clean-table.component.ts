import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TableHeader } from 'src/app/models/interfaces/table-header';
import { LanguageService } from 'src/app/core/language/language.service';
import { Language } from 'src/app/core/language/language';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClientDataSource } from '../../core/datasource/client-data-source';

@Component({
  selector: 'app-clean-table',
  templateUrl: './clean-table.component.html',
  styleUrls: ['./clean-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CleanTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  set matPaginator(mp: MatPaginator) {
    this._paginator = mp;
    if (this._dataSource) {
      this._dataSource.paginator = this._paginator;
    }
  }

  get paginator() {
    return this._paginator;
  }

  @ViewChild(MatSort)
  set content(content: MatSort) {
    this._sort = content;
    if (this._dataSource) {
      this._dataSource.sort = this._sort;
    }
  }

  @ContentChild('actions') actionsTemplate: TemplateRef<any>;

  @Input()
  set dataSource(dataSource: ClientDataSource<any>) {
    this._dataSource = dataSource;
    if (this._dataSource) {
      this._dataSource.paginator = this._paginator;
    }
  }

  get dataSource() {
    return this._dataSource;
  }

  @Input()
  set tableHeaders(tableHeaders: TableHeader[]) {
    this._displayedColumns = tableHeaders.map((item) => item.key);
    this._tableHeaders = tableHeaders;
  }

  @Input()
  showActionColumn = true;

  @Input()
  showFilter = true;

  get tableHeaders() {
    return this._tableHeaders;
  }

  language: Language = this.languageService.selectedLanguage;

  get displayedColumns() {
    if (this.showActionColumn) {
      return [...this._displayedColumns, 'actions'];
    } else {
      return this._displayedColumns;
    }
  }
  private _displayedColumns: string[] = [];

  private _tableHeaders: TableHeader[] = [];

  private _dataSource: ClientDataSource<any>;

  private _paginator: MatPaginator;

  private _sort: MatSort;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {}

  getLabel(languageKey: keyof Language) {
    if (languageKey in this.language) {
      return this.language[languageKey];
    } else {
      return this.language.missingTranslation;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getValue(element: any, path: string) {
    const attributes = path.split('.');
    let value = element;
    attributes.forEach((attribute: string) => {
      if (value && attribute in value) {
        value = value[attribute];
      }
    });
    return value;
  }

  ngAfterViewInit(): void {
    if (this._dataSource) {
      this._dataSource.paginator = this._paginator;
      this._dataSource.sort = this._sort;
    }
  }
}
