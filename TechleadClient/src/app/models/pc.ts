import {PcSpecs} from './pcSpecs';

/**
 * Pc - interface for a Pc entity
 */
export interface Pc {
  Id: string;
  price: string;
  NickName: string;
  Usage: string;
  Specs: PcSpecs;
  ProductType: string;
}
