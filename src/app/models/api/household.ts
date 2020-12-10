export interface IHousehold {
  id: number;
  livelihood: number;
  notes: string;
  household_income: number;
  food_consumption_score: number;
  coping_strategies_index: number;
  debt_level: number;
  support_received_types: number;
  support_date_received: string;
  assets: number;
  shelter_status: number;
  longitude?: string;
  latitude?: string;
}
