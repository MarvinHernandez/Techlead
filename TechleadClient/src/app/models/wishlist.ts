import {WishlistProduct} from './wishlistProduct';

/**
 * wishlist - interface for wishlists
 */
export interface Wishlist {
  id: string;
  wishlistName: string;
  memberId: string;
  products: WishlistProduct[];
}
