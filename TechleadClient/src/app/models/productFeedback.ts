/**
 * ProductFeedback - interface for a ProductFeedback entity
 */
export interface ProductFeedback {
  id: string;
  memberName: string;
  productId: string;
  rating: number;
  text: string;
}
