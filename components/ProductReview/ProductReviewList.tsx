import {useGetReviewForProductSlugQuery} from "../../generated/graphql";
import {ProductReviewItem} from "./ProductReviewItem";

interface ProductReviewListProps {
  productSlug: string;
}

export const ProductReviewList = ({productSlug}: ProductReviewListProps) => {

  const { data, loading, error } = useGetReviewForProductSlugQuery({
    variables: {
      slug: productSlug
    },
  });

  if(!data?.product){
    return null;
  }

  return (
    <div>
      {data.product.reviews.map((review) => (
        <ProductReviewItem key={review.name} review={review} />
      ))}
    </div>
  )
}


