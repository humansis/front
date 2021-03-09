import { CountValue } from 'src/app/models/api/count-value';

export interface PurchasesToRedeem {
  value: string;
  currency: string;
  project_name: string;
  project_id: number;
  purchases_ids: number[];
  purchases_count: number;
}
