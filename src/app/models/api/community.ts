import { Address } from 'src/app/models/api/address';

export interface Community {
  id: number;
  name: string;
  address: Address;
  contact_name: string;
  contact_family_name: string;
  phone_prefix: string;
  phone_number: string;
  national_id: {
    id_type: string;
    id_number: string;
  };
  latitude: string;
  longitude: string;
}
