/**
 * ProductFeedback - interface for a ProductFeedback entity
 */
export interface ProductFeedback {
  id: number;
  memberId: string;
  productId: number;
  rating: number;
  text: string;
}
