import { Component, OnInit, ViewChild } from '@angular/core';
import { Language } from '../../../../core/language/language';
import { LanguageService } from '../../../../core/language/language.service';
import { ProjectService } from '../../../../core/api/project.service';
import { Project } from '../../../../models/api/project';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, share, switchMap, tap } from 'rxjs/operators';
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
import { InstitutionService } from 'src/app/core/api/institution.service';
import { Institution } from 'src/app/models/api/institution';
import { Community } from 'src/app/models/api/community';
import { CommunityService } from 'src/app/core/api/community.service';

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
  institutions$: Observable<Institution[]>;
  communities$: Observable<Community[]>;
  loadingInstitutions = false;
  loadingCommunities = false;

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
    private institutionService: InstitutionService,
    private communityService: CommunityService,
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
    this.loadCommunities();
    this.loadInstitutions();

    this.form.controls.target_type.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.reachedBeneficiaries = 0;
        this.totalBeneficiaries = 0;
      });

    this.form.controls.assistance_type.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        if (value === 'activity') {
          this.form.patchValue({ commodities: null });
        }
        if (value === 'distribution') {
          this.form.patchValue({
            description: null,
            households_targeted: null,
            individuals_targeted: null,
          });
        }
      });

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

  activityChanged(value: any) {
    this.form.patchValue({ ...value });
  }

  commoditiesChanged(value: Commodity[]) {
    this.form.patchValue({ commodities: value });
  }

  communitiesChanged(value: number[]) {
    this.reachedBeneficiaries = value?.length || 0;
    this.form.patchValue({ communities: value });
  }

  institutionsChanged(value: number[]) {
    this.reachedBeneficiaries = value?.length || 0;
    this.form.patchValue({ institutions: value });
  }

  loadInstitutions() {
    this.loadingInstitutions = true;
    this.institutions$ = this.institutionService.get().pipe(
      map(([total, items]) => items),
      tap((items) => (this.loadingInstitutions = false))
    );
  }

  loadCommunities() {
    this.loadingCommunities = true;
    this.communities$ = this.communityService.get().pipe(
      map(([total, items]) => items),
      tap((items) => (this.loadingCommunities = false))
    );
  }

  createProject() {
    if (
      !this.form.controls.selection_criteria.value?.length &&
      (this.form.controls.target_type.value === 'household' ||
        this.form.controls.target_type.value === 'individual')
    ) {
      this.snackbar.error(this.language.add_distribution_missing_selection_criteria);
    } else if (
      this.form.controls.assistance_type.value === 'distribution' &&
      !this.form.controls.commodities.value?.length
    ) {
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
      institutions: [],
      communities: [],
      commodities: [],
      threshold: [],
      sector: [],
      subsector: [],
      assistance_type: [],
      target_type: [],
      description: [],
      households_targeted: [],
      individuals_targeted: [],
    });
  }
}
