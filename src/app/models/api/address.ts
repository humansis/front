import { AddressLocation } from 'src/app/models/api/address-location';

export interface Address {
  number: string;
  street: string;
  postcode: string;
  location: AddressLocation;
}
