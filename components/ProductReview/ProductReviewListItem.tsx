import {ReviewContentFragment} from "../../generated/graphql";
import { Rating } from "../../components/Rating";

interface ProductReviewItemProps {
  review: ReviewContentFragment
}



export const ProductReviewListItem = ({review}: ProductReviewItemProps) => {
  const isOptimistic = review.id.startsWith("-"); // temporary id

  return (
    <li className={`border mt-4 bg-white p-2   ${isOptimistic ? "opacity-50" : ""}`}>
        <p>Klient: {review.name}</p>
        <p>Treść komentarza: {review.content}</p>
        <div>
          {review.rating && (
             <Rating rating={review.rating}></Rating>
          )}
        </div>
      </li>
  )
}