import { Injectable } from '@angular/core';
import {GenericHttpService} from './generic-http.service';
import {HttpClient} from '@angular/common/http';
import {BASEURL} from '../constants';
import {Pc} from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class ProductPcService extends GenericHttpService<Pc>{

  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/pc`);
  } // constructor
}// ProductPcService
