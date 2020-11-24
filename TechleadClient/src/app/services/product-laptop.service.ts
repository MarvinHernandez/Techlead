import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { GenericHttpService} from '../services/generic-http.service';
import {Laptop} from '../models/laptop';
@Injectable({
  providedIn: 'root'
})
export class ProductLaptopService extends GenericHttpService<Laptop> {
  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/laptops`);
  } // constructor
} // EmployeeService
