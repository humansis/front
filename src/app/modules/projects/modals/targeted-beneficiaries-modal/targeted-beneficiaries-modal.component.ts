import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssistanceCriteria } from '../../../../models/api/assistance-criteria';
import { MatTableDataSource } from '@angular/material/table';
import { ClientDataSource } from '../../../../core/datasource/client-data-source';
import { BeneficiariesService } from '../../../../core/api/beneficiaries.service';
import { TableHeader } from '../../../../models/interfaces/table-header';

@Component({
  selector: 'app-targeted-beneficiaries-modal',
  templateUrl: './targeted-beneficiaries-modal.component.html',
  styleUrls: ['./targeted-beneficiaries-modal.component.scss'],
})
export class TargetedBeneficiariesModalComponent implements OnInit {
  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'id', languageKey: 'id' },
    { key: 'local_family_name', languageKey: 'beneficiary_local_family_name' },
    { key: 'local_given_name', languageKey: 'beneficiary_local_given_name' },
    { key: 'score', languageKey: 'vulnerability' },
  ];
  dataSource: ClientDataSource<any> = new ClientDataSource();

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { projectId: number; criteria: AssistanceCriteria },
    private beneficiariesService: BeneficiariesService
  ) {}

  ngOnInit(): void {
    this.dataSource.loading = true;
    this.beneficiariesService
      .getTargetedBeneficiaries(this.data.projectId, this.data.criteria)
      .subscribe(
        (data) => {
          if (data) {
            this.dataSource.data = data.map((item) => ({
              ...item,
              score: item.scores?.totalScore,
            }));
          }
          this.dataSource.loading = false;
        },
        (error) => {
          this.dataSource.loading = false;
        }
      );
  }
}
