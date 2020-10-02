import { Commodity } from 'src/app/models/api/commodity';

export interface Vendor {
  id: number;
  name: string;
  user: {
    username: string;
  };
  address_number: string;
  address_postcode: string;
  address_street: string;
  location: {
    adm1: AdministrativeLocation;
    adm2: AdministrativeLocation;
    adm3: AdministrativeLocation;
    adm4: AdministrativeLocation;
  };
}

export interface AdministrativeLocation {
  id: number;
  name: string;
}
