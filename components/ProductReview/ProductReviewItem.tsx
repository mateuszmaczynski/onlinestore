import {ReviewContentFragment} from "../../generated/graphql";
import { Rating } from "../../components/Rating";

interface ProductReviewItemProps {
  review: ReviewContentFragment
}

export const ProductReviewItem = ({review}: ProductReviewItemProps) => {
  return (
      <li className={`border mt-4 bg-white p-4`}>
        {/* <h3 className="font-bold">nagłówek: {review.headline}</h3> */}
        <p>Klient: {review.name}</p>
        <p>Treść komentarza: {review.content}</p>
        <p>
          {review.rating && (
             <Rating rating={review.rating}></Rating>
          )}
        </p>
      </li>
  )
}