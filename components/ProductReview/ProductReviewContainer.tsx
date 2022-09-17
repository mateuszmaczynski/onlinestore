import {ProductReviewForm} from "./ProductReviewForm";
import {ProductReviewList} from "./ProductReviewList";

interface ProductReviewContainerProps {
  productSlug: string;
}

export const ProductReviewContainer = ({productSlug}:ProductReviewContainerProps) => {

  return (
    <div>
      <ProductReviewForm />
      <ProductReviewList productSlug={productSlug} />
    </div>
  )
}