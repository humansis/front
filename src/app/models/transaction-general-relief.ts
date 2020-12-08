import { Beneficiary } from './beneficiary';
import { ArrayInputField } from './custom-models/array-input-field';
import { CustomModel } from './custom-models/custom-model';
import { DateModelField } from './custom-models/date-model-field';
import { MultipleObjectsModelField } from './custom-models/multiple-object-model-field';
import { NestedFieldModelField } from './custom-models/nested-field';
import { NumberModelField } from './custom-models/number-model-field';
import { TextModelField } from './custom-models/text-model-field';
import { DistributionBeneficiary } from './distribution-beneficiary';
import { FormGroup } from '@angular/forms';
import { BooleanModelField } from './custom-models/boolan-model-field';
import { Community } from 'src/app/models/community';
import { Institution } from 'src/app/models/institution';

export class GeneralRelief extends CustomModel {
  public fields = {
    id: new NumberModelField({}),
    notes: new TextModelField({}),
    distributedAt: new DateModelField({}),
  };

  public static apiToModel(generalReliefFromApi): GeneralRelief {
    const newGeneralRelief = new GeneralRelief();
    newGeneralRelief.set('id', generalReliefFromApi.id);
    newGeneralRelief.set('notes', generalReliefFromApi.notes);
    newGeneralRelief.set(
      'distributedAt',
      generalReliefFromApi.distributed_at
        ? DateModelField.formatDateTimeFromApi(generalReliefFromApi.distributed_at)
        : null
    );
    return newGeneralRelief;
  }

  public modelToApi(): Object {
    return {
      id: this.fields.id.formatForApi(),
      notes: this.fields.notes.formatForApi(),
      distributed_at: this.fields.distributedAt.formatDateTimeForApi(),
    };
  }
}

const getDistributedAt = (distributionBeneficiaryFromApi: any): Date | null => {
  if (distributionBeneficiaryFromApi.smartcard_distributed === null) {
    return distributionBeneficiaryFromApi.general_reliefs[0] &&
      distributionBeneficiaryFromApi.general_reliefs[0].distributed_at
      ? DateModelField.formatDateTimeFromApi(
          distributionBeneficiaryFromApi.general_reliefs[0].distributed_at
        )
      : null;
  }

  return DateModelField.formatDateTimeFromApi(
    distributionBeneficiaryFromApi.smartcard_distributed_at
  );
};

export class TransactionGeneralRelief extends DistributionBeneficiary {
  matSortActive = 'localFamilyName';
  title = this.language.general_relief;

  public fields = {
    ...{
      // Duplicated because needs to be the first column
      beneficiaryId: new NestedFieldModelField({
        title: this.language.beneficiary_id,
        isDisplayedInTable: true,
        childrenObject: 'beneficiary',
        childrenFieldName: 'id',
      }),
      id: new NumberModelField({}),
      idTransaction: new NumberModelField({
        title: this.language.transaction_id_transaction,
        isDisplayedInTable: false,
        isDisplayedInModal: false,
        nullValue: this.language.null_not_yet_defined,
      }),
      institutionName: new NestedFieldModelField({
        title: this.language.institution,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'institution',
        childrenFieldName: 'name',
      }),
      communityName: new NestedFieldModelField({
        title: this.language.community,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'community',
        childrenFieldName: 'name',
      }),
      localGivenName: new NestedFieldModelField({
        title: this.language.beneficiary_given_name,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'beneficiary',
        childrenFieldName: 'localGivenName',
      }),
      localFamilyName: new NestedFieldModelField({
        title: this.language.beneficiary_family_name,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'beneficiary',
        childrenFieldName: 'localFamilyName',
      }),
      enGivenName: new NestedFieldModelField({
        title: this.language.beneficiary_en_given_name,
        isDisplayedInTable: false,
        isDisplayedInModal: false,
        childrenObject: 'beneficiary',
        childrenFieldName: 'enGivenName',
      }),
      enFamilyName: new NestedFieldModelField({
        title: this.language.beneficiary_en_family_name,
        isDisplayedInTable: false,
        isDisplayedInModal: false,
        childrenObject: 'beneficiary',
        childrenFieldName: 'enFamilyName',
      }),
      nationalId: new NestedFieldModelField({
        title: this.language.national_id,
        isDisplayedInTable: true,
        childrenObject: 'beneficiary',
        childrenFieldName: 'nationalIds',
        isDisplayedInModal: true,
      }),
      generalReliefs: new MultipleObjectsModelField<GeneralRelief>({}),
      distributedAt: new DateModelField({
        title: this.language.distributed,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        nullValue: this.language.null_not_distributed,
        displayTime: true,
      }),
      smartcardDistributed: new BooleanModelField({
        title: this.language.distributed,
        isDisplayedInTable: false,
        isDisplayedInModal: false,
      }),
      // Can only be filled by the distribution, in Distribution.apiToModel()
      values: new TextModelField({
        title: this.language.value,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
      }),
      notes: new TextModelField({
        title: this.language.notes,
        isDisplayedInModal: true,
        isEditable: true,
      }),
      addReferral: new NestedFieldModelField({
        title: this.language.beneficiary_referral_question,
        isDisplayedInModal: true,
        childrenObject: 'beneficiary',
        childrenFieldName: 'addReferral',
        isEditable: true,
        isTrigger: true,
        triggerFunction: (
          transactionGeneralRelief: TransactionGeneralRelief,
          value: boolean,
          form: FormGroup
        ) => {
          transactionGeneralRelief.fields.referralComment.isDisplayedInModal = value;
          transactionGeneralRelief.fields.referralType.isDisplayedInModal = value;
          return transactionGeneralRelief;
        },
      }),
      referralType: new NestedFieldModelField({
        title: this.language.beneficiary_referral_type,
        isDisplayedInModal: false,
        childrenObject: 'beneficiary',
        childrenFieldName: 'referralType',
        isEditable: true,
      }),
      referralComment: new NestedFieldModelField({
        title: this.language.beneficiary_referral_comment,
        isDisplayedInModal: false,
        childrenObject: 'beneficiary',
        childrenFieldName: 'referralComment',
        isEditable: true,
      }),
    },
    ...this.fields,
  };

  public static apiToModel(
    distributionBeneficiaryFromApi: any,
    distributionId: number
  ): TransactionGeneralRelief {
    const newGeneralRelief = new TransactionGeneralRelief();
    if (distributionBeneficiaryFromApi.beneficiary) {
      newGeneralRelief.set(
        'beneficiary',
        Beneficiary.apiToModel(distributionBeneficiaryFromApi.beneficiary)
      );
    }
    if (distributionBeneficiaryFromApi.community) {
      newGeneralRelief.set(
        'community',
        Community.apiToModel(distributionBeneficiaryFromApi.community)
      );
    }
    if (distributionBeneficiaryFromApi.institution) {
      newGeneralRelief.set(
        'institution',
        Institution.apiToModel(distributionBeneficiaryFromApi.institution)
      );
    }

    newGeneralRelief.set(
      'distributedAt',
      getDistributedAt(distributionBeneficiaryFromApi)
    );
    newGeneralRelief.set(
      'smartcardDistributed',
      distributionBeneficiaryFromApi.smartcard_distributed
    );
    if (distributionBeneficiaryFromApi.general_reliefs) {
      newGeneralRelief.set(
        'notes',
        distributionBeneficiaryFromApi.general_reliefs.map(
          (generalRelief: any) => generalRelief.notes
        )
      );
      newGeneralRelief.set(
        'generalReliefs',
        distributionBeneficiaryFromApi.general_reliefs.map((generalRelief: any) =>
          GeneralRelief.apiToModel(generalRelief)
        )
      );
      newGeneralRelief.fields.notes.numberOfInputs = newGeneralRelief.get<
        GeneralRelief[]
      >('generalReliefs').length;
    }

    if (
      distributionBeneficiaryFromApi.transactions &&
      distributionBeneficiaryFromApi.transactions.length > 0
    ) {
      newGeneralRelief.set(
        'idTransaction',
        distributionBeneficiaryFromApi.transactions[0].id
      );
    }

    this.addCommonFields(
      newGeneralRelief,
      distributionBeneficiaryFromApi,
      distributionId
    );
    if (
      distributionBeneficiaryFromApi.beneficiary &&
      distributionBeneficiaryFromApi.beneficiary.referral
    ) {
      newGeneralRelief.fields.addReferral.isDisplayedInModal = false;
      newGeneralRelief.fields.referralType.isDisplayedInModal = true;
      newGeneralRelief.fields.referralComment.isDisplayedInModal = true;
    }
    if (distributionBeneficiaryFromApi.community) {
      const communityFields = {
        ...newGeneralRelief.fields,
      };
      delete communityFields.nationalId;
      delete communityFields.enGivenName;
      delete communityFields.enFamilyName;
      delete communityFields.localGivenName;
      delete communityFields.localFamilyName;
      delete communityFields.institutionName;
      newGeneralRelief.fields = communityFields;
    }
    if (distributionBeneficiaryFromApi.institution) {
      const institutionFields = {
        ...newGeneralRelief.fields,
      };
      delete institutionFields.nationalId;
      delete institutionFields.enGivenName;
      delete institutionFields.enFamilyName;
      delete institutionFields.localGivenName;
      delete institutionFields.localFamilyName;
      delete institutionFields.communityName;
      newGeneralRelief.fields = institutionFields;
    }
    return newGeneralRelief;
  }

  public modelToApi(): Object {
    return {
      id: this.fields.id.formatForApi(),
      beneficiary: this.fields.beneficiary.formatForApi(),
      general_reliefs: this.get('generalReliefs')
        ? this.get<Array<GeneralRelief>>(
            'generalReliefs'
          ).map((generalRelief: GeneralRelief) => generalRelief.modelToApi())
        : [],

      // local_given_name: this.get('localGivenName'),
      // local_family_name: this.get('localFamilyName'),
      // en_given_name: this.get('enGivenName'),
      // en_family_name: this.get('enFamilyName'),
      // used: this.fields.distributedAt.formatForApi(),
      // values: this.get('values'),
      // notes: this.get('notes'),
    };
  }

  isCheckable() {
    return this.get('distributedAt') === null;
  }
}
