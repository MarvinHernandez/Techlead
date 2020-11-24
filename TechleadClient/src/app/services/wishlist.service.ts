import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { Wishlist } from '../models/wishlist';
import { GenericHttpService} from '../services/generic-http.service';
import {Observable} from "rxjs";

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
}
