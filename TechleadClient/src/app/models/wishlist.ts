import {WishlistProduct} from './wishlistProduct';

/**
 * wishlist - interface for wishlists
 */
export interface Wishlist {
  Id: string;
  wishlistName: string;
  memberId: string;
  products: WishlistProduct[];
}
