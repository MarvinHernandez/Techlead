import { Injectable } from '@angular/core';
import {GenericHttpService} from './generic-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductLaptopService extends GenericHttpService<Laptop>{

  constructor() { }
}
