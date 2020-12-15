/**
 * Laptop - interface for a laptop entity
 * all properties should match the names in the server model
 */
export interface Laptop {
  Id: string;
  Company: string;
  Name: string;
  OS: string;
  Usage: string[];
  ScreenSize: string;
  Gpu: string;
  Cpu: string;
  CpuProvider: string;
  ScreenResolution: string;
  touch: string;
  TwoInOne: string;
  BuildQuality: string;
  price: string;
  Ram: string;
  Storage: string;
  ProductType: string; // laptop
}
