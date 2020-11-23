/**
 * Laptop - interface for a laptop entity
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
  Touch: string;
  TwoInOne: string;
  BuildQuality: string;
  price: string;
  Ram: string;
  Storage: string;
}
