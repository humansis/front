import { CountValue } from 'src/app/models/api/count-value';

export interface PurchasesToRedeem extends CountValue {
  purchases_ids: number[];
}
