import { CustomModel } from './custom-models/custom-model';
import { NumberModelField } from './custom-models/number-model-field';
import { TextModelField } from './custom-models/text-model-field';
import { BooleanModelField } from 'src/app/models/custom-models/boolan-model-field';
import { FormGroup } from '@angular/forms';
import { SingleSelectModelField } from 'src/app/models/custom-models/single-select-model-field';
import { BeneficiaryReferralType } from 'src/app/models/beneficiary';

export class Community extends CustomModel {
  title = this.language.vendors;
  matSortActive = 'username';

  public fields = {
    id: new NumberModelField({}),
    name: new TextModelField({
      isDisplayedInTable: true,
      title: this.language.address_street,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
    }),
    distributionId: new NumberModelField({}),
    removed: new BooleanModelField({}),
    justification: new TextModelField({
      title: this.language.justification,
      isLongText: true,
      isDisplayedInModal: false,
    }),
  };

  public static apiToModel(communityFromApi: any): Community {
    const newVendor = new Community();
    newVendor.set('id', communityFromApi.id);
    newVendor.set('name', communityFromApi.name);
    return newVendor;
  }

  public modelToApi(): Object {
    return {
      id: this.fields.id.formatForApi(),
      name: this.fields.name.formatForApi(),
    };
  }

  public isPrintable(): boolean {
    return false;
  }

  public getIdentifyingName() {
    return this.get('name');
  }
}
