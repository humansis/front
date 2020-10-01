import { Commodity } from 'src/app/models/api/commodity';

export interface Distribution {
  id: number;
  name: string;
  date_distribution: string;
  type: number;
  commodities: Commodity[];
  beneficiary: {
    id: string;
    name: string;
  };
}
