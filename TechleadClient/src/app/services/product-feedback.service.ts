import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASEURL} from '../constants';
import {GenericHttpService} from './generic-http.service';
import {ProductFeedback} from '../models/productFeedback';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFeedbackService extends GenericHttpService<ProductFeedback>{
  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/productfeedback`);
  }// Constructor

  public getByProductId(productId: string): Observable<ProductFeedback[]> {
    return this.http.get<ProductFeedback[]>(`${BASEURL}/api/productfeedback/${productId}`);
  } // getAll
}// ProductFeedbackService
