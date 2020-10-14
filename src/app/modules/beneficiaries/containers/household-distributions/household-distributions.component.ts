import { Component, Input, OnInit } from '@angular/core';
import { DistributionService } from 'src/app/core/api/distribution.service';
import { ClientDataSource } from 'src/app/core/datasource/client-data-source';
import { Community } from 'src/app/models/api/community';
import { TableHeader } from 'src/app/models/interfaces/table-header';
import { Distribution } from 'src/app/models/api/distribution';
import { PurchaseRow } from 'src/app/models/table/purchase-row';
import { DistributionCommodityRow } from 'src/app/models/table/distribution-commodity-row';

@Component({
  selector: 'app-household-distributions',
  templateUrl: './household-distributions.component.html',
  styleUrls: ['./household-distributions.component.scss'],
})
export class HouseholdDistributionsComponent implements OnInit {
  @Input()
  set householdId(householdId: number) {
    this.loadDistributions(householdId);
  }

  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'commodity', languageKey: 'commodity' },
    { key: 'amount', languageKey: 'amount' },
    { key: 'date', languageKey: 'date' },
    { key: 'distribution', languageKey: 'distribution' },
    { key: 'beneficiary', languageKey: 'beneficiary' },
  ];

  dataSource: ClientDataSource<DistributionCommodityRow> = new ClientDataSource<
    DistributionCommodityRow
  >();

  constructor(private distributionService: DistributionService) {}

  ngOnInit(): void {}

  loadDistributions(householdId: number) {
    this.distributionService.getHouseholdDistributions(householdId).subscribe(
      (distributions: Distribution[]) => {
        this.dataSource.loading = false;
        const commodityDistributions: DistributionCommodityRow[] = [];
        distributions.forEach((item) => {
          item.commodities.forEach((commodity) => {
            commodityDistributions.push({
              commodity: commodity.modality_type.name,
              amount: `${commodity.value} ${commodity.unit}`,
              date: item.date_distribution,
              distribution: item.name,
              beneficiary: item.beneficiary.name,
            });
          });
        });
        this.dataSource.data = commodityDistributions;
      },
      (error) => {
        this.dataSource.loading = false;
      }
    );
  }
}
