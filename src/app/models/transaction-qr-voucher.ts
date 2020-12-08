import { UppercaseFirstPipe } from '../shared/pipes/uppercase-first.pipe';
import { Booklet } from './booklet';
import { MultipleObjectsModelField } from './custom-models/multiple-object-model-field';
import { NestedFieldModelField } from './custom-models/nested-field';
import { ObjectModelField } from './custom-models/object-model-field';
import { DistributionBeneficiary } from './distribution-beneficiary';
import { Product } from './product';
import { CustomModel } from 'src/app/models/custom-models/custom-model';
import { Community } from 'src/app/models/community';
import { Institution } from 'src/app/models/institution';

export class TransactionQRVoucher extends DistributionBeneficiary {
  title = this.language.beneficiary;
  matSortActive = 'localFamilyName';

  public fields = {
    ...{
      // Duplicated because needs to be the first column
      beneficiaryId: new NestedFieldModelField({
        title: this.language.beneficiary_id,
        isDisplayedInTable: true,
        childrenObject: 'beneficiary',
        childrenFieldName: 'id',
      }),
      booklet: new ObjectModelField<Booklet>({}),
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
      bookletCode: new NestedFieldModelField({
        title: this.language.booklet,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'booklet',
        childrenFieldName: 'code',
      }),
      status: new NestedFieldModelField({
        title: this.language.status,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'booklet',
        childrenFieldName: 'status',
      }),
      usedAt: new NestedFieldModelField({
        title: this.language.booklet_used,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'booklet',
        childrenFieldName: 'usedAt',
        nullValue: this.language.null_not_yet,
      }),
      value: new NestedFieldModelField({
        title: this.language.value,
        isDisplayedInTable: true,
        isDisplayedInModal: true,
        childrenObject: 'booklet',
        childrenFieldName: 'value',
      }),
      addReferral: new NestedFieldModelField({
        title: this.language.beneficiary_referral_question,
        isDisplayedInModal: true,
        childrenObject: 'beneficiary',
        childrenFieldName: 'addReferral',
        isEditable: true,
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
  ): TransactionQRVoucher {
    const newQRVoucher = new TransactionQRVoucher();

    if (
      distributionBeneficiaryFromApi.beneficiary &&
      distributionBeneficiaryFromApi.beneficiary.referral
    ) {
      newQRVoucher.fields.addReferral.isDisplayedInModal = false;
      newQRVoucher.fields.referralType.isDisplayedInModal = true;
      newQRVoucher.fields.referralComment.isDisplayedInModal = true;
    }
    if (distributionBeneficiaryFromApi.community) {
      newQRVoucher.set(
        'community',
        Community.apiToModel(distributionBeneficiaryFromApi.community)
      );
    }
    if (distributionBeneficiaryFromApi.institution) {
      newQRVoucher.set(
        'institution',
        Institution.apiToModel(distributionBeneficiaryFromApi.institution)
      );
    }

    let booklet = null;
    if (
      distributionBeneficiaryFromApi.booklets.length &&
      Object.keys(distributionBeneficiaryFromApi.booklets[0]).length > 0
    ) {
      booklet = distributionBeneficiaryFromApi.booklets.filter(
        (bookletFromApi: any) => bookletFromApi.status !== 3
      )[0];
      booklet = booklet ? booklet : distributionBeneficiaryFromApi.booklets[0];
    }
    newQRVoucher.set('booklet', booklet ? Booklet.apiToModel(booklet) : null);
    this.addCommonFields(newQRVoucher, distributionBeneficiaryFromApi, distributionId);
    if (distributionBeneficiaryFromApi.community) {
      const communityFields = {
        ...newQRVoucher.fields,
      };
      delete communityFields.nationalId;
      delete communityFields.enGivenName;
      delete communityFields.enFamilyName;
      delete communityFields.localGivenName;
      delete communityFields.localFamilyName;
      delete communityFields.institutionName;
      newQRVoucher.fields = communityFields;
    }
    if (distributionBeneficiaryFromApi.institution) {
      const institutionFields = {
        ...newQRVoucher.fields,
      };
      delete institutionFields.nationalId;
      delete institutionFields.enGivenName;
      delete institutionFields.enFamilyName;
      delete institutionFields.localGivenName;
      delete institutionFields.localFamilyName;
      delete institutionFields.communityName;
      newQRVoucher.fields = institutionFields;
    }
    return newQRVoucher;
  }

  public modelToApi(): Object {
    return {
      id: this.fields.beneficiaryId.formatForApi(),
      beneficiary: this.fields.beneficiary.formatForApi(),
      booklet: this.fields.booklet.formatForApi(),
      status: this.fields.status.formatForApi(),
      booklets: this.get('booklet') ? [this.get('booklet').modelToApi()] : [],
      // local_given_name: this.get('beneficiary').get('localGivenName'),
      // local_family_name: this.get('beneficiary').get('localFamilyName'),
    };
  }

  public isAssignable(): boolean {
    if (
      this.get('booklet') &&
      this.get<CustomModel>('booklet').get<CustomModel>('status').get<string>('id') !==
        '3'
    ) {
      return false;
    }
    return true;
  }

  public isPrintable(): boolean {
    return this.get('booklet');
  }
}
