/**
 * Phone - interface for a phone entity
 */
export interface Phone {
  id: string;
  company: string;
  name: string;
  positive: string[];
  price: string;
  usage: string;
  cpu: string;
  ram: string;
  screenSize: string;
  fiveGSupport: string;
  type: string; // phone
}
