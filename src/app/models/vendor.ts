import { FormGroup } from '@angular/forms';
import { AppInjector } from '../app-injector';
import { LocationService } from '../core/api/location.service';
import { CountriesService } from '../core/countries/countries.service';
import { CustomModel } from './custom-models/custom-model';
import { NestedFieldModelField } from './custom-models/nested-field';
import { NumberModelField } from './custom-models/number-model-field';
import { ObjectModelField } from './custom-models/object-model-field';
import { TextModelField } from './custom-models/text-model-field';
import { Location } from './location';
import { User } from './user';

export class Vendor extends CustomModel {
  title = this.language.vendors;
  matSortActive = 'username';

  protected countryService = AppInjector.get(CountriesService);
  // Country
  protected country = this.countryService.selectedCountry.get<string>('id')
    ? this.countryService.selectedCountry.get<string>('id')
    : this.countryService.khm.get<string>('id');

  public fields = {
    id: new NumberModelField({}),
    user: new ObjectModelField<User>({}),
    username: new NestedFieldModelField({
      title: this.language.username,
      isDisplayedInTable: true,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
      isRequired: true,
      childrenObject: 'user',
      childrenFieldName: 'username',
    }),
    password: new NestedFieldModelField({
      title: this.language.password,
      isPassword: true,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
      isRequired: true,
      childrenObject: 'user',
      childrenFieldName: 'password',
    }),
    shopName: new TextModelField({
      title: this.language.name,
      isDisplayedInTable: true,
      isDisplayedInModal: true,
      isRequired: true,
      isSettable: true,
    }),
    shopType: new TextModelField({
      title: this.language.description,
      isDisplayedInTable: true,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
    }),
    addressStreet: new TextModelField({
      isDisplayedInTable: true,
      title: this.language.address_street,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
    }),
    addressNumber: new TextModelField({
      isDisplayedInTable: true,
      title: this.language.address_number,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
    }),
    addressPostcode: new TextModelField({
      isDisplayedInTable: true,
      title: this.language.address_postcode,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
    }),
    location: new ObjectModelField<Location>({
      isDisplayedInTable: true,
      displayTableFunction: null,
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
      title: this.language.location,
      tooltip: null,
    }),
    adm1: new NestedFieldModelField({
      title: this.language.adm1[this.country],
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
      childrenObject: 'location',
      childrenFieldName: 'adm1',
    }),
    adm2: new NestedFieldModelField({
      title: this.language.adm2[this.country],
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
      childrenObject: 'location',
      childrenFieldName: 'adm2',
    }),
    adm3: new NestedFieldModelField({
      title: this.language.adm3[this.country],
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
      childrenObject: 'location',
      childrenFieldName: 'adm3',
    }),
    adm4: new NestedFieldModelField({
      title: this.language.adm4[this.country],
      isDisplayedInModal: true,
      isSettable: true,
      isEditable: true,
      childrenObject: 'location',
      childrenFieldName: 'adm4',
    }),
  };

  public static apiToModel(vendorFromApi: any): Vendor {
    const newVendor = new Vendor();
    newVendor.set('id', vendorFromApi.id);
    newVendor.set('user', User.apiToModel(vendorFromApi.user));
    newVendor.set('shopName', vendorFromApi.name);
    newVendor.set('shopType', vendorFromApi.shop);
    newVendor.set('addressStreet', vendorFromApi.address_street);
    newVendor.set('addressNumber', vendorFromApi.address_number);
    newVendor.set('addressPostcode', vendorFromApi.address_postcode);
    newVendor.set(
      'location',
      vendorFromApi.location ? Location.apiToModel(vendorFromApi.location) : null
    );

    newVendor.fields.location.tooltip = (value: Location) => value.getLocationName();
    newVendor.fields.location.displayTableFunction = (value: Location) =>
      value ? value.getPreciseLocationName() : null;
    newVendor.fields.password.isRequired = false; // No need to enter the password on update

    return newVendor;
  }

  public modelToApi(): Object {
    return {
      id: this.fields.id.formatForApi(),
      address_number: this.fields.addressNumber.formatForApi(),
      address_street: this.fields.addressStreet.formatForApi(),
      address_postcode: this.fields.addressPostcode.formatForApi(),
      location: this.fields.location.formatForApi(),
      name: this.fields.shopName.formatForApi(),
      password: this.get('user').get('password'),
      username: this.get('user').get('username'),
      salt: this.get('user').get('salt'),
      shop: this.fields.shopType.formatForApi(),
    };
  }

  public isPrintable(): boolean {
    return true;
  }

  public getIdentifyingName() {
    return this.get<CustomModel>('user').get<string>('username');
  }
}
