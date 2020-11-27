export interface Sector {
  id: number;
  name: string;
  subSectors?: SubSector[];
}

export interface SubSector {
  id: number;
  name: string;
  availableTargets: string[];
  assistanceType: string;
}
