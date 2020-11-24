/**
 * Laptop - interface for a laptop entity
 */
export interface Laptop {
  id: string;
  company: string;
  Name: string;
  os: string;
  usage: string[];
  screenSize: string;
  gpu: string;
  cpu: string;
  cpuProvider: string;
  screenResolution: string;
  touch: string;
  twoInOne: string;
  buildQuality: string;
  price: string;
  ram: string;
  storage: string;
  type: string; // laptop
}
