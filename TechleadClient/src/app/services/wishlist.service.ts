import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from '../constants';
import { Wishlist } from '../models/wishlist';
import { GenericHttpService} from '../services/generic-http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService extends GenericHttpService<Wishlist> {
  constructor(public http: HttpClient) {
    super(http, `${BASEURL}/api/wishlists`);
  }
}
