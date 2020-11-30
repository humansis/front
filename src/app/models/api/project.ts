export interface Project {
  id: number;
  iso3: string;
  name: string;
  notes: string;
  target: number;
  donors: any[];
  end_date: string;
  start_date: string;
  number_of_households: number;
  sectors: any[];
  reached_beneficiaries: number;
  distributions: any[];
}
