import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from '../../../../core/language/language.service';
import { TableHeader } from '../../../../models/interfaces/table-header';
import { ClientDataSource } from '../../../../core/datasource/client-data-source';
import { Criteria as ModelCriteria } from '../../../../models/criteria';
import { ModalService } from '../../../../core/utils/modal.service';
import { MatTableDataSource } from '@angular/material/table';
import { BeneficiariesService } from '../../../../core/api/beneficiaries.service';
import { MatDialog } from '@angular/material/dialog';
import { TargetedBeneficiariesModalComponent } from '../../modals/targeted-beneficiaries-modal/targeted-beneficiaries-modal.component';
import { Criteria } from 'src/app/models/api/criteria';
import { AssistanceCriteria } from 'src/app/models/api/assistance-criteria';
import { Observable } from 'rxjs';
import { DisplayType } from 'src/app/models/constants/screen-sizes';
import { ScreenSizeService } from 'src/app/core/screen-size/screen-size.service';
import { UserService } from '../../../../core/api/user.service';

@Component({
  selector: 'app-assistance-criteria',
  templateUrl: './assistance-criteria.component.html',
  styleUrls: ['./assistance-criteria.component.scss'],
})
export class AssistanceCriteriaComponent implements OnInit {
  language = this.languageService.selectedLanguage;

  @Input()
  projectId: number;
  @Input()
  set targetType(targetType: string) {
    this._targetType = targetType;
    this.reloadAllBeneficiaries();
  }

  get targetType() {
    return this._targetType;
  }

  @Input()
  set sector(sector: string) {
    this._sector = sector;
    this.reloadAllBeneficiaries();
  }

  get sector() {
    return this._sector;
  }

  @Input()
  set subsector(subsector: string) {
    this._subsector = subsector;
    this.reloadAllBeneficiaries();
  }

  get subsector() {
    return this._subsector;
  }

  @Output()
  reachedBeneficiariesChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  totalBeneficiariesChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  criteriaChanged: EventEmitter<Criteria[][]> = new EventEmitter<Criteria[][]>();
  @Output()
  thresholdChanged: EventEmitter<number> = new EventEmitter<number>();

  displayType$: Observable<DisplayType>;

  public readonly TABLE_HEADERS: TableHeader[] = [
    { key: 'target', languageKey: 'criteria_target' },
    { key: 'criteria', languageKey: 'criteria' },
    { key: 'condition_string', languageKey: 'criteria_operator' },
    { key: 'value_string', languageKey: 'value' },
    { key: 'weight', languageKey: 'criteria_weight' },
  ];

  set initialData(initialData: { criteria: ModelCriteria[][]; threshold: number }) {
    this.form.patchValue({ threshold: initialData.threshold });
    this.groups = initialData.criteria?.map(
      (criteriaGroup) => new ClientDataSource(criteriaGroup)
    );
    this.notifyCriteriaChanged();
    this.groups.forEach((group, index) => this.reloadBeneficiaries(index));
  }

  form: FormGroup;
  groups: MatTableDataSource<ModelCriteria>[] = [];
  groupBeneficiaries: number[] = [];
  reachedBeneficiaries = 0;
  totalBeneficiaries = 0;

  private _sector: string;
  private _subsector: string;
  private _targetType: string;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService,
    private beneficiariesService: BeneficiariesService,
    private screenSizeService: ScreenSizeService,
    private modalService: ModalService,
    private dialog: MatDialog,
    public userService: UserService
  ) {
    this.form = this.createForm();
    this.displayType$ = this.screenSizeService.displayTypeSource.asObservable();
    this.form.valueChanges.subscribe((value) => {
      this.thresholdChanged.emit(value.threshold);
      if (!isNaN(+value.threshold) && value.threshold !== null) {
        const assistanceCriteria = this.getAssistanceCriteria();
        if (assistanceCriteria.criteria.length > 0) {
          this.reloadTargetedBeneficiaries(assistanceCriteria, value.threshold);
        }
      }
    });
  }

  ngOnInit(): void {
    this.form.patchValue({ threshold: 0 });
  }

  addCriteria(index: number) {
    this.modalService
      .openAddCriteriaDialog()
      .subscribe((modelCriteria: ModelCriteria) => {
        if (modelCriteria && index < this.groups.length) {
          this.groups[index] = new ClientDataSource([
            ...this.groups[index].data,
            modelCriteria,
          ]);
          this.reloadBeneficiaries(index);
          this.notifyCriteriaChanged();
        }
      });
  }

  addGroup() {
    const emptyGroups = this.groups.filter((group) => group.data.length === 0);
    if (emptyGroups.length === 0) {
      this.groups = [...this.groups, new ClientDataSource([])];
      if (this.groups.length > this.groupBeneficiaries.length) {
        this.groupBeneficiaries = [...this.groupBeneficiaries, 0];
      }
      this.addCriteria(this.groups.length - 1);
    }
  }

  removeCriteria(index: number, criteria: ModelCriteria) {
    this.groups[index].data = this.groups[index].data.filter((item) => item !== criteria);
    this.reloadBeneficiaries(index);
    this.notifyCriteriaChanged();
  }

  removeGroup(index: number) {
    this.groups = this.groups.filter((item, itemIndex) => itemIndex !== index);
    this.reloadTotalBeneficiaries();
    this.notifyCriteriaChanged();
  }

  showBeneficiaries() {
    const threshold = this.form.get('threshold').value || 0;
    this.dialog.open(TargetedBeneficiariesModalComponent, {
      width: '800px',
      data: {
        projectId: this.projectId,
        criteria: { ...this.getAssistanceCriteria(), threshold },
      },
    });
  }

  showGroupBeneficiaries(index: number) {
    this.dialog.open(TargetedBeneficiariesModalComponent, {
      width: '800px',
      data: {
        projectId: this.projectId,
        criteria: this.getGroupAssistanceCriteria(index),
      },
    });
  }

  private notifyCriteriaChanged() {
    if (this.groups) {
      this.criteriaChanged.emit(
        this.groups.map((dataTable) => dataTable.data.map((item) => item.modelToApi()))
      );
    }
  }

  private reloadAllBeneficiaries() {
    if (this.targetType && this.sector && this.subsector) {
      this.groups.forEach((data, index) => this.reloadGroupBeneficiaries(index));
      this.reloadTotalBeneficiaries();
    }
  }

  private reloadBeneficiaries(index: number) {
    this.reloadGroupBeneficiaries(index);
    this.reloadTotalBeneficiaries();
  }

  private reloadTotalBeneficiaries() {
    const assistanceCriteria = this.getAssistanceCriteria();
    const threshold = this.form.get('threshold').value || 0;
    this.beneficiariesService
      .getTargetedBeneficiariesNumber(this.projectId, assistanceCriteria)
      .subscribe((response) => {
        this.totalBeneficiaries = response.number;
        this.totalBeneficiariesChanged.emit(response.number);
      });

    this.reloadTargetedBeneficiaries(assistanceCriteria, threshold);
  }

  private reloadGroupBeneficiaries(index: number) {
    const criteria = this.getGroupAssistanceCriteria(index);
    if (criteria.criteria.length > 0 && criteria.criteria[0].length > 0) {
      this.beneficiariesService
        .getTargetedBeneficiariesNumber(this.projectId, criteria)
        .subscribe((response) => {
          this.groupBeneficiaries[index] = response.number;
        });
    } else {
      this.groupBeneficiaries[index] = 0;
    }
  }

  private reloadTargetedBeneficiaries(
    assistanceCriteria: AssistanceCriteria,
    threshold: number
  ) {
    this.beneficiariesService
      .getTargetedBeneficiariesNumber(this.projectId, {
        ...assistanceCriteria,
        threshold,
      })
      .subscribe((response) => {
        this.reachedBeneficiaries = response.number;
        this.reachedBeneficiariesChanged.emit(response.number);
      });
  }

  private getGroupAssistanceCriteria(index: number) {
    const criteria = this.groups[index].data.map((item) => item.modelToApi());
    return {
      sector: this.sector,
      subsector: this.subsector,
      target_type: this.targetType,
      criteria: [criteria],
      threshold: 0,
    };
  }

  private getAssistanceCriteria() {
    const criteria = this.groups
      .filter((data) => data.data.length > 0)
      .map((data) => data.data.map((item) => item.modelToApi()));
    return {
      sector: this.sector,
      subsector: this.subsector,
      target_type: this.targetType,
      criteria,
      threshold: 0,
    };
  }

  private createForm() {
    return this.fb.group({
      threshold: [0],
    });
  }
}
