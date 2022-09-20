import {useGetReviewForProductSlugQuery} from "../../generated/graphql";
import {ProductReviewListItem} from "./ProductReviewListItem";

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
        <ProductReviewListItem key={review.name} review={review} />
      ))}
    </div>
  )
}


