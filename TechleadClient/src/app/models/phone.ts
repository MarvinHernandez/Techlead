/**
 * Phone - interface for a phone entity
 */
export interface Phone {
  id: string;
  company: string;
  name: string;
  type: string;
  positive: string[];
  price: string;
  mainUsage: string;
  cpu: string;
  ram: string;
  screenSize: string;
  fiveGSupport: string;
}
