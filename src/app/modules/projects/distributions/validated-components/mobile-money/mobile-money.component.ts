import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs/operators';
import { Beneficiary } from 'src/app/models/beneficiary';
import { Commodity } from 'src/app/models/commodity';
import { State, TransactionMobileMoney } from 'src/app/models/transaction-mobile-money';
import { User } from 'src/app/models/user';
import { ValidatedDistributionComponent } from '../validated-distribution.component';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/language/language.service';
import { CustomModel } from 'src/app/models/custom-models/custom-model';
import { Distribution } from 'src/app/models/distribution';
import { TargetType } from 'src/app/models/constants/target-type.enum';

@Component({
  selector: 'app-mobile-money',
  templateUrl: './mobile-money.component.html',
  styleUrls: [
    '../validated-distribution.component.scss',
    './mobile-money.component.scss',
  ],
})
export class MobileMoneyComponent extends ValidatedDistributionComponent
  implements OnInit {
  // sentStates = [State.Sent, State.AlreadySent, State.PickedUp];
  // receivedStates = [State.PickedUp];

  // Language
  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  public transactionData: MatTableDataSource<TransactionMobileMoney>;

  public enteredCodeControl = new FormControl('', [
    Validators.minLength(6),
    Validators.maxLength(6),
    Validators.required,
  ]);
  public codeSent = false;

  ngOnInit() {
    super.ngOnInit();
  }

  setDistributionBeneficiaries(distributionBeneficiaries: any) {
    this.actualDistribution.set(
      'distributionBeneficiaries',
      distributionBeneficiaries.map((distributionBeneficiary: any) =>
        TransactionMobileMoney.apiToModel(
          distributionBeneficiary,
          this.actualDistribution.get('id')
        )
      )
    );
  }

  formatTransactionTable() {
    let values = '';
    this.actualDistribution
      .get<Commodity[]>('commodities')
      .forEach((commodity, index) => {
        if (index > 0) {
          values += ', ';
        }
        values += commodity.get('value') + ' ' + commodity.get('unit');
      });

    const distributionBeneficiaries = this.actualDistribution
      .get<TransactionMobileMoney[]>('distributionBeneficiaries')
      .map((transaction: TransactionMobileMoney) => {
        transaction.set('values', values);
        return transaction;
      });

    this.actualDistribution.set('distributionBeneficiaries', distributionBeneficiaries);
    this.transactionData = new MatTableDataSource(distributionBeneficiaries);
    this.loadingTransaction = false;
    if (this.userService.hasRights('ROLE_AUTHORISE_PAYMENT')) {
      this.refreshStatuses();
    }
  }

  refreshStatuses() {
    this.distributionService.refreshPickup(this.distributionId).subscribe(
      (result) => {
        if (!result) {
          return;
        }
        this.transactionData.data.forEach(
          (transaction: TransactionMobileMoney, index) => {
            if (transaction.get<CustomModel>('state').get<string>('id') === '0') {
              return;
            }
            result.forEach((distributionBeneficiary) => {
              if (
                transaction.get('beneficiary').get('id') ===
                distributionBeneficiary.beneficiary.id
              ) {
                // Is moneyReceived really a field ???
                this.transactionData.data[index].updateForPickup(
                  distributionBeneficiary.moneyReceived
                );
              }
            });
          }
        );
      },
      (error) => {
        this.snackbar.error(this.language.snackbar_pickup_error);
      }
    );
  }

  /**
   * Opens a dialog corresponding to the ng-template passed as a parameter
   * @param template
   */
  openDialog(template: any) {
    this.cacheService.getUser().subscribe((result: User) => {
      if (result) {
        this.actualUser = result;
      }
      if (!this.actualUser.get('email') && this.actualUser.get('username')) {
        this.actualUser.set('email', this.actualUser.get('username'));
      }
      const now = new Date();
      const distributionDate = new Date(this.actualDistribution.get('date'));
      if (distributionDate < now) {
        this.codeVerif();
        this.dialog.open(template);
      } else {
        this.snackbar.error(this.language.snackbar_distribution_in_future);
      }
    });
  }

  getCommoditySentAmountFromBeneficiary(
    commodity: Commodity,
    beneficiary: TransactionMobileMoney
  ): number {
    return parseInt(beneficiary.get('state').get('id'), 10) > 0
      ? commodity.get('value')
      : 0;
  }

  getCommodityReceivedAmountFromBeneficiary(
    commodity: Commodity,
    beneficiary: any
  ): number {
    return parseInt(beneficiary.get('state').get('id'), 10) > 2
      ? commodity.get('value')
      : 0;
  }

  noHistory() {
    let noHistory = true;
    this.actualDistribution.get<Commodity[]>('commodities').forEach((commodity) => {
      if (this.getAmountSent(commodity) !== 0) {
        noHistory = false;
      }
    });
    return noHistory;
  }

  getPeopleCount(): number {
    let peopleCount = 0;
    for (const distributionBeneficiary of this.transactionData.data.filter(
      (item) => !item.get('removed')
    )) {
      if (parseInt(distributionBeneficiary.get('state').get('id'), 10) <= 0) {
        peopleCount++;
      }
    }
    return peopleCount;
  }

  requestLogs() {
    if (this.userService.hasRights('ROLE_DISTRIBUTIONS_DIRECTOR')) {
      try {
        this.distributionService.logs(this.actualDistribution.get('id')).subscribe(
          (e) => {
            this.snackbar.error('' + e);
          },
          () => {
            this.snackbar.success(this.language.table_logs_success);
          }
        );
      } catch (e) {
        this.snackbar.error(this.language.table_logs_error + ' : ' + e);
      }
    } else {
      this.snackbar.error(this.language.not_enough_rights);
    }
  }

  codeVerif() {
    if (new Date().getTime() - this.lastCodeSentTime > this.SENDING_CODE_FREQ) {
      this.distributionService
        .sendCode(this.actualDistribution.get('id'))
        .toPromise()
        .then(
          (anwser) => {
            if (anwser === 'Email sent') {
              this.lastCodeSentTime = new Date().getTime();
              this.snackbar.success(
                this.language.snackbar_verification_code +
                  ' ' +
                  this.actualUser.get('email')
              );
            }
          },
          () => {
            this.lastCodeSentTime = new Date().getTime();
            this.snackbar.success(
              this.language.snackbar_verification_code +
                ' ' +
                this.actualUser.get('email')
            );
          }
        )
        .catch((err) => {
          this.snackbar.error(this.language.snackbar_verification_code_error + ' ' + err);
        });
    } else {
      this.snackbar.error(this.language.snackbar_verification_code_wait_error);
    }
  }

  /**
   * To transact
   */
  confirmTransaction() {
    if (this.userService.hasRights('ROLE_DISTRIBUTIONS_DIRECTOR')) {
      this.progression = 0;
      this.transacting = true;
      this.distributionService
        .transaction(this.actualDistribution.get('id'), this.enteredCodeControl.value)
        .pipe(
          finalize(() => {
            this.transacting = false;
            this.codeSent = false;
            clearInterval(this.interval);
            this.refreshStatuses();
          })
        )
        .subscribe((success: any) => {
          this.codeSent = true;

          if (success && this.transactionData) {
            this.transactionData.data.forEach(
              (actualDistributionBeneficiary: TransactionMobileMoney) => {
                const actualBeneficiaryId = actualDistributionBeneficiary
                  .get('beneficiary')
                  .get('id');

                success.already_sent.forEach((distributionBeneficiaryFromApi) => {
                  if (
                    actualBeneficiaryId === distributionBeneficiaryFromApi.beneficiary.id
                  ) {
                    actualDistributionBeneficiary.updateState('2');
                    actualDistributionBeneficiary = this.setTransactionMessage(
                      distributionBeneficiaryFromApi,
                      actualDistributionBeneficiary
                    );
                  }
                });
                success.failure.forEach((distributionBeneficiaryFromApi) => {
                  if (
                    actualBeneficiaryId === distributionBeneficiaryFromApi.beneficiary.id
                  ) {
                    actualDistributionBeneficiary.updateState('0');
                    actualDistributionBeneficiary = this.setTransactionMessage(
                      distributionBeneficiaryFromApi,
                      actualDistributionBeneficiary
                    );
                  }
                });
                success.no_mobile.forEach((distributionBeneficiaryFromApi) => {
                  if (
                    actualBeneficiaryId === distributionBeneficiaryFromApi.beneficiary.id
                  ) {
                    actualDistributionBeneficiary.updateState('-1');
                    actualDistributionBeneficiary = this.setTransactionMessage(
                      distributionBeneficiaryFromApi,
                      actualDistributionBeneficiary
                    );
                  }
                });
                success.sent.forEach((distributionBeneficiaryFromApi) => {
                  if (
                    actualBeneficiaryId === distributionBeneficiaryFromApi.beneficiary.id
                  ) {
                    actualDistributionBeneficiary.updateState('1');
                    actualDistributionBeneficiary = this.setTransactionMessage(
                      distributionBeneficiaryFromApi,
                      actualDistributionBeneficiary
                    );
                  }
                });
              }
            );
          }
          this.dialog.closeAll();
        });

      const progression = 0;
      // let peopleLeft = this.getAmount('waiting', this.actualDistribution.commodities[0]);
      // peopleLeft = peopleLeft / this.actualDistribution.commodities[0].value;

      // this.interval = setInterval(() => {
      //     this.distributionService.checkProgression(this.distributionId)
      //         .subscribe(
      //             distributionProgression => {
      //                 if (distributionProgression) {
      //                     if (distributionProgression !== progression) {
      //                         progression = distributionProgression;

      //                         this.progression = Math.floor((result / peopleLeft) * 100);
      //                     }
      //                 }
      //             }
      //         );
      // }, 3000);
    } else {
      this.snackbar.error(this.language.distribution_no_right_transaction);
    }
  }

  /**
   * open each modal dialog
   */
  openModal(dialogDetails: any): void {
    this.modalSubscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
    let completeSubscription = null;

    if (dialogDetails.action === 'delete') {
      dialogDetails.element = dialogDetails.element.get('beneficiary');
      this.modalService.openDialog(Beneficiary, this.beneficiariesService, dialogDetails);
      completeSubscription = this.modalService.isCompleted.subscribe(
        (response: boolean) => {
          if (response) {
            this.getDistributionBeneficiaries();
            this.dataChanged.emit();
          } else {
            this.loadingTransaction = false;
          }
        }
      );
    } else if (dialogDetails.action === 'addBeneficiary') {
      this.modalService.openDialog(Beneficiary, this.beneficiariesService, dialogDetails);
      completeSubscription = this.modalService.isCompleted.subscribe(
        (response: boolean) => {
          if (this.networkService.getStatus()) {
            if (response) {
              this.getDistributionBeneficiaries();
              this.dataChanged.emit();
            } else {
              this.loadingTransaction = false;
            }
          } else {
            this.loadingTransaction = false;
          }
        }
      );
    } else if (dialogDetails.action === 'edit') {
      dialogDetails.element = dialogDetails.element.get('beneficiary');
      this.modalService.openDialog(Beneficiary, this.beneficiariesService, dialogDetails);
      completeSubscription = this.modalService.isCompleted.subscribe(
        (response: boolean) => {
          this.loadingTransaction = false;
        }
      );
    } else {
      this.modalService.openDialog(
        TransactionMobileMoney,
        this.beneficiariesService,
        dialogDetails
      );
      completeSubscription = this.modalService.isCompleted.subscribe(
        (_response: boolean) => {}
      );
    }
    if (completeSubscription) {
      this.modalSubscriptions = [completeSubscription];
    }
  }

  get entity() {
    return TransactionMobileMoney;
  }
}
