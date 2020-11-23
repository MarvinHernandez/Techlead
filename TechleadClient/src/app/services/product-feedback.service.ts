import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASEURL} from '../constants';
import {GenericHttpService} from './generic-http.service';
import {ProductFeedback} from '../models/productFeedback';

@Injectable({
  providedIn: 'root'
})
export class ProductFeedbackService extends GenericHttpService<ProductFeedback>{
  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/feedback`);
  }// Constructor
}// ProductFeedbackService
