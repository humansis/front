import { AppInjector } from '../app-injector';
import { CountriesService } from '../core/countries/countries.service';
import { UppercaseFirstPipe } from '../shared/pipes/uppercase-first.pipe';
import { Beneficiary } from './beneficiary';
import { CountrySpecificAnswer } from './country-specific';
import { CustomModel } from './custom-models/custom-model';
import { MultipleObjectsModelField } from './custom-models/multiple-object-model-field';
import { MultipleSelectModelField } from './custom-models/multiple-select-model-field';
import { NumberModelField } from './custom-models/number-model-field';
import { ObjectModelField } from './custom-models/object-model-field';
import { SingleSelectModelField } from './custom-models/single-select-model-field';
import { TextModelField } from './custom-models/text-model-field';
import { HouseholdLocation } from './household-location';
import { Location } from './location';
import { Project } from './project';
import { VulnerabilityCriteria } from './vulnerability-criteria';
import { NationalId } from './national-id';
import { DateModelField } from 'src/app/models/custom-models/date-model-field';
import { IdNameModel } from 'src/app/models/id-name-model';

export class Livelihood extends CustomModel {
  public fields = {
    name: new TextModelField({}),
    id: new TextModelField({}),
  };

  constructor(id: string, name: string) {
    super();
    this.set('id', id);
    this.set('name', name);
  }
}

export class IncomeLevel extends CustomModel {
  public fields = {
    name: new TextModelField({}),
    id: new TextModelField({}),
  };

  constructor(id: string, name: string) {
    super();
    this.set('id', id);
    this.set('name', name);
  }
}
export class Household extends CustomModel {
  pluralName = this.language.beneficiary_plural;
  title = this.language.households;
  matSortActive = 'localFamilyName';

  protected countryService = AppInjector.get(CountriesService);

  protected country = this.countryService.selectedCountry.get<string>('id')
    ? this.countryService.selectedCountry.get<string>('id')
    : this.countryService.khm.get<string>('id');

  public fields = {
    id: new NumberModelField({
      title: this.language.household_id,
      isDisplayedInTable: true,
    }),
    localFamilyName: new TextModelField({
      title: this.language.beneficiary_family_name,
      isDisplayedInModal: true,
      isDisplayedInTable: true,
      isRequired: true,
      isSettable: true,
      isLongText: false,
      displayValue: '',
    }),
    localFirstName: new TextModelField({
      title: this.language.beneficiary_given_name,
      isDisplayedInModal: true,
      isDisplayedInTable: true,
      isRequired: true,
      isSettable: true,
      isLongText: false,
      displayValue: '',
    }),
    enFamilyName: new TextModelField({
      title: this.language.beneficiary_en_family_name,
      isDisplayedInModal: false,
      isDisplayedInTable: false,
      isRequired: true,
      isSettable: true,
      isLongText: false,
    }),
    enFirstName: new TextModelField({
      title: this.language.beneficiary_en_given_name,
      isDisplayedInModal: false,
      isDisplayedInTable: false,
      isRequired: true,
      isSettable: true,
      isLongText: false,
    }),
    dependents: new NumberModelField({
      title: this.language.household_members,
      isDisplayedInTable: true,
      isDisplayedInModal: true,
    }),
    vulnerabilities: new MultipleObjectsModelField<VulnerabilityCriteria>({
      title: this.language.beneficiary_vulnerabilities,
      isDisplayedInTable: true,
      isImageInTable: true,
      isIcon: true,
      value: [],
      isDisplayedInModal: true,
      displayModalFunction: null,
      displayTableFunction: null,
    }),
    nationalId: new MultipleObjectsModelField<NationalId>({
      title: this.language.national_id_number,
      isDisplayedInTable: true,
      value: [],
      isDisplayedInModal: false,
      displayModalFunction: null,
      displayTableFunction: null,
    }),
    projects: new MultipleSelectModelField({
      title: this.language.projects,
      isDisplayedInTable: true,
      isDisplayedInModal: true,
      isRequired: true,
      bindField: 'name',
      value: [],
      apiLabel: 'id',
    }),
    beneficiaries: new MultipleObjectsModelField<Beneficiary>({
      value: [],
    }),
    countrySpecificAnswers: new MultipleObjectsModelField<CountrySpecificAnswer>({
      value: [],
    }),
    livelihood: new SingleSelectModelField({
      apiLabel: 'id',
    }),
    notes: new TextModelField({
      isLongText: true,
    }),
    incomeLevel: new SingleSelectModelField({
      title: this.language.household_income,
      isDisplayedInModal: true,
      bindField: 'name',
      apiLabel: 'id',
      isMatSelect: true,
      options: [
        new IncomeLevel('1', this.language['household_income_level']['1'][this.country]),
        new IncomeLevel('2', this.language['household_income_level']['2'][this.country]),
        new IncomeLevel('3', this.language['household_income_level']['3'][this.country]),
        new IncomeLevel('4', this.language['household_income_level']['4'][this.country]),
        new IncomeLevel('5', this.language['household_income_level']['5'][this.country]),
      ],
    }),
    foodConsumptionScore: new NumberModelField({
      title: this.language.household_food_consumption_score,
      isDisplayedInModal: true,
    }),
    copingStrategiesIndex: new NumberModelField({
      title: this.language.household_coping_strategies_index,
      isDisplayedInModal: true,
    }),
    debtLevel: new NumberModelField({
      title: this.language.household_debt_level,
      isDisplayedInModal: true,
    }),
    supportReceivedOtherOrg: new MultipleSelectModelField({
      title: this.language.household_support_received_other_org,
      isDisplayedInModal: true,
      isRequired: false,
      apiLabel: 'id',
      bindField: 'name',
      options: [
        new IdNameModel('0', 'MPCA'),
        new IdNameModel('1', 'Cash for Work'),
        new IdNameModel('2', 'Food Kit'),
        new IdNameModel('3', 'Food Voucher'),
        new IdNameModel('4', 'Hygiene Kit'),
        new IdNameModel('5', 'Shelter Kit'),
        new IdNameModel('6', 'Shelter Reconstruction Support'),
        new IdNameModel('7', 'Non Food Items'),
        new IdNameModel('8', 'Livelihoods Support'),
        new IdNameModel('9', 'Vocational Training'),
        new IdNameModel('10', 'None'),
        new IdNameModel('11', 'Other'),
      ],
      value: [],
    }),
    supportReceived: new DateModelField({
      title: this.language.household_support_date_received,
      isDisplayedInModal: true,
    }),
    supportOrganization: new TextModelField({
      title: this.language.household_support_organization,
      value: '',
    }),
    assets: new MultipleSelectModelField({
      title: this.language.household_assets,
      isDisplayedInModal: true,
      isRequired: false,
      apiLabel: 'id',
      bindField: 'name',
      options: [
        new IdNameModel('0', 'A/C'),
        new IdNameModel('1', 'Agricultural Land'),
        new IdNameModel('2', 'Car'),
        new IdNameModel('3', 'Flatscreen TV'),
        new IdNameModel('4', 'Livestock'),
        new IdNameModel('5', 'Motorbike'),
        new IdNameModel('6', 'Washing Machine'),
      ],
      value: [],
    }),
    shelterStatus: new SingleSelectModelField({
      title: this.language.household_shelter_status,
      isDisplayedInModal: true,
      isRequired: false,
      apiLabel: 'id',
      bindField: 'name',
      isMatSelect: true,
      options: [
        new IdNameModel('1', 'Tent'),
        new IdNameModel('2', 'Makeshift Shelter'),
        new IdNameModel('3', 'Transitional Shelter'),
        new IdNameModel('4', 'House/Apartment - Severely Damaged'),
        new IdNameModel('5', 'House/Apartment - Moderately Damaged'),
        new IdNameModel('6', 'House/Apartment - Good Condition'),
        new IdNameModel('7', 'Room or Space in Public Building'),
        new IdNameModel('8', 'Room or Space in Unfinished Building'),
        new IdNameModel('9', 'Other'),
      ],
    }),

    // For now they are never used, set, displayed, or equal to anything other than zero
    longitude: new TextModelField({
      value: '0',
    }),
    latitude: new TextModelField({
      value: '0',
    }),
    currentHouseholdLocation: new ObjectModelField<HouseholdLocation>({
      title: this.language.household_location_current_location,
      isDisplayedInTable: true,
      isDisplayedInModal: true,
      displayTableFunction: null,
      displayModalFunction: null,
      tooltip: null,
    }),
    residentHouseholdLocation: new ObjectModelField<HouseholdLocation>({
      title: this.language.household_location_resident_location,
      isDisplayedInModal: true,
      displayModalFunction: null,
    }),
  };

  public static apiToModel(householdFromApi: any, household?: Household): Household {
    const newHousehold = household || new Household();

    newHousehold.set('id', householdFromApi.id);
    newHousehold.set('notes', householdFromApi.notes);
    newHousehold.set(
      'incomeLevel',
      householdFromApi.income_level
        ? newHousehold
            .getOptions('incomeLevel')
            .find(
              (incomeLevel: IncomeLevel) =>
                incomeLevel.get('id') === householdFromApi.income_level.toString()
            )
        : null
    );
    newHousehold.set('foodConsumptionScore', householdFromApi.food_consumption_score);
    newHousehold.set('copingStrategiesIndex', householdFromApi.coping_strategies_index);
    newHousehold.set(
      'assets',
      householdFromApi.assets
        ? householdFromApi.assets.map((id) => new IdNameModel(id, undefined))
        : undefined
    );
    newHousehold.set('debtLevel', householdFromApi.debt_level);
    newHousehold.set('supportReceived', householdFromApi.support_date_received);
    newHousehold.set('supportOrganization', householdFromApi.support_organization_name);
    newHousehold.set(
      'supportReceivedOtherOrg',
      householdFromApi.assets
        ? householdFromApi.support_received_types.map(
            (id) => new IdNameModel(id, undefined)
          )
        : undefined
    );
    newHousehold.set(
      'shelterStatus',
      householdFromApi.shelter_status
        ? newHousehold
            .getOptions('shelterStatus')
            .find(
              (incomeLevel: IdNameModel) =>
                incomeLevel.get('id') === householdFromApi.shelter_status.toString()
            )
        : null
    );
    newHousehold.set(
      'livelihood',
      householdFromApi.livelihood !== null && householdFromApi.livelihood !== undefined
        ? newHousehold
            .getOptions('livelihood')
            .find(
              (livelihood: Livelihood) =>
                livelihood.get('id') === householdFromApi.livelihood.toString()
            )
        : null
    );

    newHousehold.set('dependents', householdFromApi.beneficiaries.length);

    newHousehold.fields.vulnerabilities.displayTableFunction = (value) => value;
    const pipe = new UppercaseFirstPipe();
    newHousehold.fields.vulnerabilities.displayModalFunction = (value) =>
      value
        .map((vulnerability: VulnerabilityCriteria) =>
          pipe.transform(vulnerability.get('name'))
        )
        .join(', ');
    newHousehold.set(
      'projects',
      householdFromApi.projects
        .filter((project: any) => !project.archived)
        .map((project) => Project.apiToModel(project))
    );
    newHousehold.fields.nationalId.displayTableFunction = (value) =>
      value
        ? value.map((nationalId: NationalId) => nationalId.get('number')).join(', ')
        : null;

    newHousehold.set(
      'beneficiaries',
      householdFromApi.beneficiaries.map((beneficiary) =>
        Beneficiary.apiToModel(beneficiary)
      )
    );
    newHousehold
      .get<Beneficiary[]>('beneficiaries')
      .forEach((beneficiary: Beneficiary) => {
        if (beneficiary.get<CustomModel>('beneficiaryStatus').get<string>('id') === '1') {
          newHousehold.set('localFamilyName', beneficiary.get<string>('localFamilyName'));
          newHousehold.set('localFirstName', beneficiary.get<string>('localGivenName'));
          newHousehold.fields.localFamilyName.displayValue =
            beneficiary.fields.localFamilyName.displayValue;
          newHousehold.fields.localFirstName.displayValue =
            beneficiary.fields.localGivenName.displayValue;
          newHousehold.set('enFamilyName', beneficiary.get<string>('enFamilyName'));
          newHousehold.set('enFirstName', beneficiary.get<string>('enGivenName'));
          newHousehold.set('nationalId', beneficiary.get<string>('nationalIds'));
        }
        beneficiary
          .get<VulnerabilityCriteria[]>('vulnerabilities')
          .forEach((vulnerability: VulnerabilityCriteria) => {
            newHousehold.add('vulnerabilities', vulnerability);
          });
      });

    newHousehold.set(
      'countrySpecificAnswers',
      householdFromApi.country_specific_answers
        ? householdFromApi.country_specific_answers.map((countrySpecificAnswer) =>
            CountrySpecificAnswer.apiToModel(countrySpecificAnswer)
          )
        : null
    );

    const householdLocations = householdFromApi.household_locations
      ? householdFromApi.household_locations.map((householdLocation: any) =>
          HouseholdLocation.apiToModel(householdLocation)
        )
      : null;

    const currentHouseholdLocation = householdLocations.filter(
      (householdLocation: HouseholdLocation) =>
        householdLocation.get<CustomModel>('locationGroup').get<string>('id') ===
        'current'
    );
    const residentHouseholdLocation = householdLocations.filter(
      (householdLocation: HouseholdLocation) =>
        householdLocation.get<CustomModel>('locationGroup').get<string>('id') ===
        'resident'
    );

    newHousehold.set(
      'currentHouseholdLocation',
      currentHouseholdLocation.length > 0 ? currentHouseholdLocation[0] : null
    );
    newHousehold.set(
      'residentHouseholdLocation',
      residentHouseholdLocation.length > 0 ? residentHouseholdLocation[0] : null
    );

    newHousehold.fields.currentHouseholdLocation.displayTableFunction = (
      value: HouseholdLocation
    ) => {
      return value.getHouseholdPreciseLocationName();
    };
    newHousehold.fields.currentHouseholdLocation.displayModalFunction = (
      value: HouseholdLocation
    ) => value.getHouseholdLocationName();
    newHousehold.fields.currentHouseholdLocation.tooltip = (value: HouseholdLocation) =>
      value.getHouseholdLocationName();
    newHousehold.fields.residentHouseholdLocation.displayModalFunction = (
      value: HouseholdLocation
    ) => (value ? value.getHouseholdLocationName() : null);

    return newHousehold;
  }

  public getIdentifyingName() {
    return (
      this.language.household_sentence +
      this.get('localFirstName') +
      ' ' +
      this.get('localFamilyName')
    );
  }

  public modelToApi(): Object {
    const householdLocations = [this.get<HouseholdLocation>('currentHouseholdLocation')];
    if (this.get<HouseholdLocation>('residentHouseholdLocation')) {
      householdLocations.push(this.get<HouseholdLocation>('residentHouseholdLocation'));
    }
    return {
      livelihood: this.fields.livelihood.formatForApi(),
      longitude: this.fields.longitude.formatForApi(),
      latitude: this.fields.latitude.formatForApi(),
      notes: this.fields.notes.formatForApi(),
      country_specific_answers: this.fields.countrySpecificAnswers.formatForApi(),
      beneficiaries: this.fields.beneficiaries.formatForApi(),
      income_level: this.fields.incomeLevel.formatForApi(),
      household_locations: householdLocations.map(
        (householdLocation: HouseholdLocation) => householdLocation.modelToApi()
      ),
      food_consumption_score: this.fields.foodConsumptionScore.formatForApi(),
      coping_strategies_index: this.fields.copingStrategiesIndex.formatForApi(),
      debt_level: this.fields.debtLevel.formatForApi(),
      support_received_types: this.fields.supportReceivedOtherOrg.formatForApi(),
      support_date_received: this.fields.supportReceived.formatForApi(),
      support_organization_name: this.fields.supportOrganization.formatForApi(),
      shelter_status: this.fields.shelterStatus.formatForApi(),
      assets: this.fields.assets.formatForApi(),
    };
  }
}
export class FormLocation {
  current: Location = new Location();
  resident: Location = new Location();
}
