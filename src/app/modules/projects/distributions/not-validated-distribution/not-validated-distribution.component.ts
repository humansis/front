import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DistributionService } from 'src/app/core/api/distribution.service';
import { UserService } from 'src/app/core/api/user.service';
import { LanguageService } from 'src/app/core/language/language.service';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { NetworkService } from 'src/app/core/network/network.service';
import { ScreenSizeService } from 'src/app/core/screen-size/screen-size.service';
import { AsyncacheService } from 'src/app/core/storage/asyncache.service';
import { ModalService } from 'src/app/core/utils/modal.service';
import { Beneficiary } from 'src/app/models/beneficiary';
import { DisplayType } from 'src/app/models/constants/screen-sizes';
import { Distribution } from 'src/app/models/distribution';
import { DistributionBeneficiary } from 'src/app/models/distribution-beneficiary';
import { User } from 'src/app/models/user';
import { BeneficiariesService } from './../../../../core/api/beneficiaries.service';

@Component({
  selector: 'app-not-validated-distribution',
  templateUrl: './not-validated-distribution.component.html',
  styleUrls: [
    './not-validated-distribution.component.scss',
    '../distributions.component.scss',
  ],
})
export class NotValidatedDistributionComponent implements OnInit, OnDestroy {
  @Input() actualDistribution: Distribution;
  @Input() loaderValidation = false;

  @Output() isUpdated = new EventEmitter<void>();
  @Output() validateClick = new EventEmitter<void>();

  loadingExport = false;
  loadingDatas = true;
  loadingDistribution = true;
  modalSubscriptions: Array<Subscription> = [];

  // Control variables.

  loadingFirstStep = false;
  loadingThirdStep = false;
  loadingFinalStep = false;
  extensionTypeStep1 = 'xlsx';
  extensionTypeStep3 = 'xlsx';

  public sampleSizeControl = new FormControl(10, [
    Validators.max(100),
    Validators.min(0),
    Validators.required,
  ]);

  loadingAdd: boolean;

  // Entities passed to table components.
  beneficiaryEntity = Beneficiary;
  entity: any;
  checkedLines: any = [];
  distributed = false;

  // Datas.
  initialBeneficiaryData: MatTableDataSource<Beneficiary>;
  randomSampleData: MatTableDataSource<Beneficiary>;
  finalBeneficiaryData: MatTableDataSource<Beneficiary>;

  // AddBeneficiary Dialog variables.
  selected = false;

  actualUser = new User();

  interval: any;
  correctCode = false;
  progression: number;

  // Screen size
  public currentDisplayType: DisplayType;
  private screenSizeSubscription: Subscription;

  // Language
  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  constructor(
    public distributionService: DistributionService,
    public cacheService: AsyncacheService,
    private beneficiariesService: BeneficiariesService,
    public snackbar: SnackbarService,
    private dialog: MatDialog,
    private networkService: NetworkService,
    protected modalService: ModalService,
    public userService: UserService,
    public languageService: LanguageService,
    private screenSizeService: ScreenSizeService
  ) {}

  ngOnInit() {
    this.screenSizeSubscription = this.screenSizeService.displayTypeSource.subscribe(
      (displayType: DisplayType) => {
        this.currentDisplayType = displayType;
      }
    );
    this.getDistributionBeneficiaries('initial');
  }

  ngOnDestroy() {
    this.screenSizeSubscription.unsubscribe();
    this.modalSubscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }

  /**
   * Gets the Beneficiaries of the actual distribution to display the table
   */
  getDistributionBeneficiaries(type: string) {
    if (type === 'initial') {
      this.loadingFirstStep = true;
    } else if (type === 'final') {
      this.loadingFinalStep = true;
    } else if (type === 'both') {
      this.loadingFirstStep = true;
      this.loadingFinalStep = true;
    }
    this.distributionService
      .getBeneficiaries(this.actualDistribution.get('id'))
      .subscribe((distributionBeneficiaries) => {
        const beneficiaries = distributionBeneficiaries
          ? this.setDistributionBenefAndGetBenef(distributionBeneficiaries)
          : [];

        if (type === 'initial') {
          // Step 1 table
          this.initialBeneficiaryData = new MatTableDataSource(beneficiaries);
        } else if (type === 'final') {
          // Step 4 table
          this.finalBeneficiaryData = new MatTableDataSource(beneficiaries);
        } else if (type === 'both') {
          this.initialBeneficiaryData = new MatTableDataSource(beneficiaries);
          this.finalBeneficiaryData = new MatTableDataSource(beneficiaries);
        }

        this.loadingFirstStep = false;
        this.loadingFinalStep = false;

        this.generateRandom();

        if (this.loadingDatas === true) {
          this.loadingDatas = false;
        }
      });

    if (type === 'edit') {
      this.finalBeneficiaryData = this.initialBeneficiaryData;
    }
  }

  setDistributionBenefAndGetBenef(distributionBeneficiaries: any): Beneficiary[] {
    if (distributionBeneficiaries && distributionBeneficiaries.length > 0) {
      this.actualDistribution.set(
        'distributionBeneficiaries',
        distributionBeneficiaries.map((distributionBeneficiariy: any) =>
          DistributionBeneficiary.apiToModel(
            distributionBeneficiariy,
            this.actualDistribution.get('id')
          )
        )
      );
    }
    return this.actualDistribution
      .get<DistributionBeneficiary[]>('distributionBeneficiaries')
      .map((distributionBeneficiariy: any) =>
        distributionBeneficiariy.get('beneficiary')
      );
  }

  jumpStep(stepper: MatStepper) {
    stepper.next();
  }

  /**
   * To confirm on Validation dialog
   */
  confirmValidation() {
    if (
      (this.finalBeneficiaryData && this.finalBeneficiaryData.data.length > 0) ||
      (this.initialBeneficiaryData && this.initialBeneficiaryData.data.length > 0)
    ) {
    } else {
      this.snackbar.error(this.language.distribution_error_validate);
    }
  }

  fileSelected(event) {
    if (event) {
      this.selected = true;
    } else {
      this.selected = false;
    }
  }

  /**
   * Generates a table of random beneficiaries from this distribution (length of table = sample size)
   */
  generateRandom() {
    const sampleLength = this.defineSampleSize();
    this.loadingThirdStep = true;

    if (sampleLength > 0) {
      this.beneficiariesService
        .getRandom(this.actualDistribution.get('id'), sampleLength)
        .subscribe(
          (response) => {
            if (response) {
              const data = response.map((beneficiary: any) => {
                const newBeneficiary = Beneficiary.apiToModel(beneficiary);
                newBeneficiary.set('distributionId', this.actualDistribution.get('id'));
                return newBeneficiary;
              });
              this.randomSampleData = new MatTableDataSource(data);
            }
            this.loadingThirdStep = false;
          },
          (error) => {
            this.loadingThirdStep = false;
          }
        );
    } else {
      this.loadingThirdStep = false;
    }
  }

  /**
   * Defines the number of beneficiaries corresponding of the sampleSize percentage
   */
  defineSampleSize(): number {
    if (this.finalBeneficiaryData) {
      return Math.ceil(
        (this.sampleSizeControl.value / 100) * this.finalBeneficiaryData.data.length
      );
    } else {
      if (this.initialBeneficiaryData) {
        return Math.ceil(
          (this.sampleSizeControl.value / 100) * this.initialBeneficiaryData.data.length
        );
      } else {
        return 1;
      }
    }
  }

  /**
   * Requests Back-end a csv containing the sample to export it
   */
  exportSample() {
    this.loadingExport = true;
    const randomSampleForApi = this.randomSampleData.data.map(
      (beneficiary: Beneficiary) => beneficiary.modelToApi()
    );
    this.distributionService
      .exportSample(randomSampleForApi, this.extensionTypeStep3)
      .subscribe(
        () => {
          this.loadingExport = false;
        },
        (_error: any) => {
          this.loadingExport = false;
        }
      );
  }

  /**
   * Handles the csv export of the data table
   */
  export() {
    this.loadingExport = true;
    this.distributionService
      .export('distribution', this.extensionTypeStep1, this.actualDistribution.get('id'))
      .subscribe(
        () => {
          this.loadingExport = false;
        },
        (_error: any) => {
          this.loadingExport = false;
        }
      );
  }

  /**
   * Set the export type.
   * @param step
   * @param choice
   */
  setType(step, choice) {
    switch (step) {
      case 1:
        this.extensionTypeStep1 = choice;
        break;
      case 3:
        this.extensionTypeStep3 = choice;
        break;
      default:
        break;
    }
  }

  /**
   * open each modal dialog
   */
  openModal(dialogDetails: any): void {
    this.modalSubscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );

    this.modalService.openDialog(Beneficiary, this.beneficiariesService, dialogDetails);
    const isLoadingSubscription = this.modalService.isLoading.subscribe(() => {
      this.loadingFirstStep = true;
      this.loadingFinalStep = true;
    });
    const completeSubscription = this.modalService.isCompleted.subscribe(
      (response: boolean) => {
        if (response) {
          this.isUpdated.emit();
          if (
            this.networkService.getStatus() &&
            dialogDetails.action === 'addBeneficiary'
          ) {
            this.distributionService
              .getBeneficiaries(this.actualDistribution.get('id'))
              .subscribe((distributionBeneficiaries) => {
                if (distributionBeneficiaries) {
                  const beneficiaries = this.setDistributionBenefAndGetBenef(
                    distributionBeneficiaries
                  );
                  this.initialBeneficiaryData = new MatTableDataSource(beneficiaries);
                }
              });
            this.snackbar.success(this.language.distribution_beneficiary_added);
            this.getDistributionBeneficiaries('final');
          } else {
            this.getDistributionBeneficiaries('both');
          }
        } else {
          this.loadingFirstStep = false;
          this.loadingFinalStep = false;
        }
      }
    );
    this.modalSubscriptions = [isLoadingSubscription, completeSubscription];
  }
}
