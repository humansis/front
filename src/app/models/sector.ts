import { Exception } from '@zxing/library';
import { CustomModel } from 'src/app/models/custom-models/custom-model';
import { NumberModelField } from './custom-models/number-model-field';
import { TextModelField } from './custom-models/text-model-field';

export class Sector extends CustomModel {
  matSortActive = 'name';

  fields = {
    id: new NumberModelField({
      title: null,
    }),
    name: new TextModelField({
      title: null,
    }),
  };

  public static apiToModel(sectorFromApi): Sector {
    const newSector = new Sector();

    newSector.set('id', sectorFromApi.id);
    newSector.set('name', sectorFromApi.name);

    return newSector;
  }

  // Map sector to sector image
  public getImage(): string {
    const sectorsImages: object = {
      camp_management: 'cccm',
      early_recovery: 'early-recovery',
      emergency_telco: 'emergency-telecommunications',
      food_security: 'food-security',
      health: 'health',
      logistics: 'logistics',
      nutrition: 'nutrition',
      protection: 'protection',
      livelihoods: 'livelihood',
      mine: 'mine-action',
      non_sector: 'nonspecific',
      shelter: 'shelter',
      drr_resilience: 'resilience',
      wash: 'water-sanitation',
      multipurpose_cash: 'cash-for-work',
      education: 'education',
      'food, RTE kits': 'kits',
      nfis: 'nfi',
    };

    // Todo: Use global variable, fix typing in order to not do this if check
    if (typeof this.get('id') === 'string') {
      const name = this.get('id').toLowerCase();
      if (sectorsImages[name]) {
        return sectorsImages[name];
      }
    } else {
      return '';
    }
  }

  // Map sector to sector image
  public getTooltip(): string {
    const sectorsTooltips: object = {
      camp_management: this.language.sector_cccm,
      early_recovery: this.language.sector_recovery,
      emergency_telco: this.language.sector_telecom,
      food_security: this.language.sector_food,
      health: this.language.sector_health,
      logistics: this.language.sector_logistics,
      livelihoods: this.language.sector_livelihoods,
      nutrition: this.language.sector_nutrition,
      protection: this.language.sector_protection,
      mine: this.language.sector_mine_action,
      non_sector: this.language.sector_nonspecific,
      shelter: this.language.sector_shelter,
      drr_resilience: this.language.sector_drr_diligence,
      wash: this.language.sector_water,
      multipurpose_cash: this.language.sector_multipurpose_cash,
      education: this.language.sector_education_tvet,
      'food, RTE kits': this.language.sector_food_kits,
      nfis: this.language.sector_nfi,
    };
    // Todo: Use global variable, fix typing in order to not do this if check
    if (typeof this.get('id') === 'string') {
      return sectorsTooltips[this.get<string>('id')?.toLowerCase()];
    } else {
      return '';
    }
  }

  public getIdentifyingName() {
    return this.get<string>('name');
  }
}
