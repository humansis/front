import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataChange } from 'src/app/models/api/data-change';
import { HouseholdsService } from 'src/app/core/api/households.service';
import { Language } from 'src/app/core/language/language';
import { LanguageService } from 'src/app/core/language/language.service';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTableComponent implements OnInit {
  @Input() set id(id: number | undefined) {
    if (id) {
      this.householdsService.getHouseholdHistory(id).subscribe((data) => {
        this.dataChanges = data;
        this.reloadData(this._attribute);
      });
    }
  }
  @Input() set attribute(attribute: string) {
    this.reloadData(attribute);
    this._attribute = attribute;
  }

  @Input() title: string;

  displayedColumns: string[] = ['date', 'value'];

  language: Language = this.languageService.selectedLanguage;

  dataSource: MatTableDataSource<{ date: string; value: any }> = new MatTableDataSource<{
    date: string;
    value: any;
  }>();

  private dataChanges: DataChange<any>[] = [];
  private _attribute: string;

  constructor(
    private householdsService: HouseholdsService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {}

  private reloadData(attribute: string) {
    const allValues = this.dataChanges
      .map((item) => ({
        date: item.created_at,
        value: item.changes[attribute],
      }))
      .sort((a, b) => b.date.localeCompare(a.date));
    const filteredValues = [];
    let lastValue;
    allValues.forEach((item) => {
      if (item.value !== lastValue) {
        filteredValues.push(item);
      }
      lastValue = item.value;
    });
    this.dataSource.data = filteredValues;
  }
}
