import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormInput from "./FormInput";

const NewsletterFormSchema = yup.object().shape({
  email: yup.string().email().required().trim(),
}).required();

type NewsletterFormData = yup.InferType<typeof NewsletterFormSchema>

export const NewsletterForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState
  } = useForm<NewsletterFormData>({resolver: yupResolver(NewsletterFormSchema)});

  const onSubmit = handleSubmit((data) => {
    fetch('http://localhost:3000/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": data.email
      })})
  })

  return (
    <div className="flex flex-col md:w-full">
      <div className="mt-10 sm:mt-0">
        <p className="text-2xl pb-4 font-medium">
          JOIN OUR NEWSLETTER
        </p>
        <form onSubmit={(e) => onSubmit(e)}>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <FormInput
                fieldName={"email"}
                label={"Email address"}
                register={register}
                formState={formState}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <button
                type="submit"
                className="inline-flex justify-center mt-5 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try it & Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
