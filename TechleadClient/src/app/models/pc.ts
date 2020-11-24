import {PcSpecs} from './pcSpecs';

/**
 * Pc - interface for a Pc entity
 */
export interface Pc {
  id: string;
  price: string;
  nickName: string;
  usage: string;
  pcSpecs: PcSpecs;
  type: string; // PC
}
