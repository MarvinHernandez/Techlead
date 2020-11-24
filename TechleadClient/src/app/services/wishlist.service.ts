import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { Wishlist } from '../models/wishlist';
import { GenericHttpService} from '../services/generic-http.service';
import {Observable} from "rxjs";
import {Laptop} from "../models/laptop";
import {Pc} from "../models/pc";
import {Phone} from "../models/phone";

@Injectable({
  providedIn: 'root'
})
export class WishlistService extends GenericHttpService<Wishlist> {
  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/wishlist`);
  }

  public getByUserId(id: string): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(`${BASEURL}/api/wishlist/${id}`);
  } // getByUserId

  public getLaptopByProductId(id: string): Observable<Laptop> {
    return this.http.get<Laptop>(`${BASEURL}/api/laptops/${id}`);
  } // getLaptopByProductId

  public getPcByProductId(id: string): Observable<Pc> {
    return this.http.get<Pc>(`${BASEURL}/api/pc/${id}`);
  } // getPcByProductId

  public getPhoneByProductId(id: string): Observable<Phone> {
    return this.http.get<Phone>(`${BASEURL}/api/phones/${id}`);
  } // getPhoneByProductId
}