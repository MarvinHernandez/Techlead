import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { Wishlist } from '../models/wishlist';
import { GenericHttpService} from '../services/generic-http.service';
import {Observable} from "rxjs";
import {Laptop} from "../models/laptop";
import {Pc} from "../models/pc";
import {Phone} from "../models/phone";
import {Member} from "../models/member";

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

  public deleteByProductId(prodId: string, wishlistId: string): Observable<number>{
    return this.http.delete<number>(`${BASEURL}/api/wishlist/${wishlistId}/${prodId}`);
  } // deleteByProductId

  public deleteByWishlist(wishlist: Wishlist): Observable<number>{
    return this.http.delete<number>(`${BASEURL}/api/wishlist/${wishlist.Id}`);
  } // deleteByProductId

  public addProductToWishlist(prodId: string, wishlistId: string, prodType: string): Observable<number>{
    // @ts-ignore
    return this.http.put(`${BASEURL}/api/wishlist/${wishlistId}/${prodId}/${prodType}`);
  }

  public addWishlist(item: Wishlist): Observable<number> {
    return this.http.post<number>(`${BASEURL}/api/wishlist`, item);
  } // addMember
}
