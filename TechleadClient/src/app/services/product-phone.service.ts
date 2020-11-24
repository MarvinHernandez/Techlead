import { Injectable } from '@angular/core';
import {GenericHttpService} from './generic-http.service';
import {Phone} from '../models/phone';
import {HttpClient} from '@angular/common/http';
import {BASEURL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductPhoneService extends GenericHttpService<Phone> {

  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/phones`);
  } // constructor
}// ProductPhoneService
