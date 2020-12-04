export interface Sector {
  id: number;
  name: string;
  subsectors?: Subsector[];
}

export interface Subsector {
  id: number;
  name: string;
  availableTargets: string[];
  assistanceTypes: string[];
}
