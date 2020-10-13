import { Address } from 'src/app/models/api/address';

export interface Institution {
  id: number;
  name: string;
  type: string;
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
