import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormInput from "./../FormInput";
import {GetReviewForProductSlugDocument, useCreateProductReviewMutation} from "../../generated/graphql";

const ReviewFormSchema = yup.object().shape({
  email: yup.string().email().required().trim(),
  content: yup.string().min(2).required().trim(),
  headline: yup.string().min(2).required().trim(),
  name: yup.string().min(3).required().trim(),
  rating: yup.number().min(1).max(5).required()
}).required();

type ReviewFormData = yup.InferType<typeof ReviewFormSchema>

interface ProductReviewFormProps {
  productSlug: string;
}

export const ProductReviewForm = ({productSlug}: ProductReviewFormProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState
  } = useForm<ReviewFormData>({resolver: yupResolver(ReviewFormSchema)});

  const [createReview, { data, loading, error }] = useCreateProductReviewMutation({
    refetchQueries: [
      {
        query: GetReviewForProductSlugDocument,
        variables: { slug: productSlug },
      },
    ]
  });

  const onSubmit = handleSubmit( (data) => {
    createReview({
      variables: {
        review: {
          ...data,
          product: {
            connect: {
              slug: productSlug
            }
          }
        }
      }
    })
  })



  return (
    <div className="flex flex-col md:w-full">
      <div className="mt-10 sm:mt-0">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-1  sm:col-span-2">
              <FormInput
                fieldName={"headline"}
                label={"Headline"}
                register={register}
                formState={formState}
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <FormInput
                fieldName={"content"}
                label={"Content"}
                register={register}
                formState={formState}
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormInput
                fieldName={"name"}
                label={"Name"}
                register={register}
                formState={formState}
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormInput
                fieldName={"email"}
                label={"Email address"}
                register={register}
                formState={formState}
              />
            </div>
            <div className="col-span-6 sm:col-span-2">
              <FormInput
                fieldName={"rating"}
                label={"Rating"}
                type="number"
                register={register}
                formState={formState}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <button
                type="submit"
                className="inline-flex justify-center mt-5 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Dodaj komentarz
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
