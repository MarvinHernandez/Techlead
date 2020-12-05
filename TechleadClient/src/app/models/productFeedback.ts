/**
 * ProductFeedback - interface for a ProductFeedback entity
 */
export interface ProductFeedback {
  id: string;
  memberId: string;
  productId: string;
  rating: number;
  text: string;
}
