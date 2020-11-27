import { Component, OnInit, ViewChild } from '@angular/core';
import { Language } from '../../../../core/language/language';
import { LanguageService } from '../../../../core/language/language.service';
import { ProjectService } from '../../../../core/api/project.service';
import { Project } from '../../../../models/api/project';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, share, switchMap } from 'rxjs/operators';
import * as moment from 'moment';
import { SectorService } from '../../../../core/api/sector.service';
import { Sector } from '../../../../models/api/sector';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Criteria } from 'src/app/models/api/criteria';
import { Criteria as ModelCriteria } from 'src/app/models/criteria';
import { Commodity } from 'src/app/models/commodity';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { DistributionService } from 'src/app/core/api/distribution.service';
import { AssistanceLocationFormComponent } from 'src/app/modules/projects/components/assistance-location-form/assistance-location-form.component';
import { AssistanceCommodityComponent } from 'src/app/modules/projects/containers/assistance-commodity/assistance-commodity.component';
import { AssistanceCriteriaComponent } from 'src/app/modules/projects/containers/assistance-criteria/assistance-criteria.component';

@Component({
  selector: 'app-assistance-create-page',
  templateUrl: './assistance-create-page.component.html',
  styleUrls: ['./assistance-create-page.component.scss'],
})
export class AssistanceCreatePageComponent implements OnInit {
  language: Language = this.languageService.selectedLanguage;
  project$: Observable<Project>;
  projectEndDate$: Observable<Date>;
  sectors$: Observable<Sector[]>;

  formData: any = {};
  form: FormGroup;
  totalBeneficiaries = 0;
  reachedBeneficiaries = 0;
  loadingCreation = false;

  @ViewChild(AssistanceLocationFormComponent)
  assistanceLocationForm: AssistanceLocationFormComponent;
  @ViewChild(AssistanceCommodityComponent)
  assistanceCommodityComponent: AssistanceCommodityComponent;
  @ViewChild(AssistanceCriteriaComponent)
  assistanceCriteriaComponent: AssistanceCriteriaComponent;

  constructor(
    private projectService: ProjectService,
    private sectorService: SectorService,
    private languageService: LanguageService,
    private distributionService: DistributionService,
    private snackbar: SnackbarService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.loadProject();
    this.loadSectors();

    this.route.queryParamMap
      .pipe(
        filter((queryMap) => queryMap.has('duplicateDistribution')),
        map((queryMap) => +queryMap.get('duplicateDistribution')),
        switchMap((distributionId) => this.distributionService.getOne(distributionId))
      )
      .subscribe((value) => {
        this.assistanceLocationForm.initialData = value;
        this.assistanceCommodityComponent.initialData = value.commodities?.map((item) =>
          Commodity.apiToModel(item)
        );
        this.assistanceCriteriaComponent.initialData = {
          criteria: value.selection_criteria.map((groups) =>
            groups.map((item) => ModelCriteria.apiToModel(item))
          ),
          threshold: value.threshold,
        };
        this.form.patchValue(value);
      });
  }

  loadProject() {
    this.project$ = this.route.paramMap.pipe(
      map((params) => +params.get('id')),
      switchMap((projectId) => this.projectService.getOne(projectId)),
      share()
    );
    this.projectEndDate$ = this.project$.pipe(
      map((project) => moment(project.end_date, 'DD-MM-YYYY').toDate())
    );
    this.project$.pipe(map((project) => project.id)).subscribe((projectId) => {
      this.form.patchValue({ project: { id: projectId } });
    });
  }

  loadSectors() {
    this.sectors$ = this.sectorService.get();
  }

  parametersChanged(value: any) {
    this.form.patchValue({ ...value });
  }

  locationChanged(value: any) {
    this.form.patchValue({ ...value });
  }

  criteriaChanged(value: Criteria[][]) {
    this.form.patchValue({ selection_criteria: value });
  }

  thresholdChanged(threshold: number) {
    this.form.patchValue({ threshold });
  }

  commoditiesChanged(value: Commodity[]) {
    this.form.patchValue({ commodities: value });
  }

  createProject() {
    if (!this.form.controls.selection_criteria.value?.length) {
      this.snackbar.error(this.language.add_distribution_missing_selection_criteria);
    } else if (!this.form.controls.commodities.value?.length) {
      this.snackbar.error(this.language.add_distribution_missing_commodity);
    } else if (!this.form.controls.date_distribution.value) {
      this.snackbar.error(this.language.add_distribution_missing_date);
    } else if (this.form.controls.threshold.value < 0) {
      this.snackbar.error(this.language.add_distribution_missing_threshold);
    } else if (!this.form.controls.location?.value?.adm1) {
      this.snackbar.error(this.language.add_distribution_missing_location);
    } else if (this.reachedBeneficiaries <= 0) {
      this.snackbar.error(this.language.add_distribution_no_beneficiaries);
    } else {
      this.distributionService
        .create({
          ...this.form.value,
          name: 'Test ' + new Date().toDateString(),
        })
        .subscribe(
          (response) => {
            if (response) {
              this.snackbar.success(
                this.language.distribution +
                  ' : ' +
                  response.distribution.name +
                  this.language.add_distribution_created
              );
              this.router.navigate([
                'projects/distributions/' + response.distribution.id,
              ]);
            }
          },
          (err) => {
            this.snackbar.error(this.language.add_distribution_error_creating);
            this.loadingCreation = false;
          }
        );
    }
  }

  cancel() {
    this.router.navigate(['projects']);
  }

  private createForm() {
    return this.fb.group({
      location: [],
      date_distribution: [],
      name: [],
      project: [],
      selection_criteria: [],
      commodities: [],
      threshold: [],
      sector: [],
      subsector: [],
      assistance_type: [],
      target_type: [],
    });
  }
}
