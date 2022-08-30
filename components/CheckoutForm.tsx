import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "to pole jest wymagane",
    oneOf: "to pole wymaga wartości: ${values}",
  },
  string: {
    email: "email jest wymagany w odpowiednim formacie ",
    min: "minimalna liczna znaków ${min}",
    length: "to pole wymaga ${length} znaków",
  },
});

const CheckoutFormSchema = yup.object().shape({
  address: yup.string().required().trim(),
  cardNumber: yup.string().required().length(26),
  city: yup.string().required().trim(),
  country: yup.string().required().trim(),
  cvc: yup.string().matches(/^d{3}/, "numer CVC musi zawierać 3 cyfry").required().trim(),
  email: yup.string().email().required().trim(),
  expirationDate: yup.string().required().trim(),
  lastName: yup.string().min(2).required().trim(),
  name: yup.string().min(2).required().trim(),
  owner: yup.string().min(5).required().trim(),
  phone: yup.string().required().trim(),
  postalCode: yup.string().required().trim(),
  region: yup.string().required().trim(),
  acceptTerms: yup.string().oneOf(["true"],"potwierdzenie warunków jest obowiązkowe"),
}).required();

type CheckoutFormData = yup.InferType<typeof CheckoutFormSchema>

const CheckoutForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState
  } = useForm<CheckoutFormData>({  resolver: yupResolver(CheckoutFormSchema)});

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <div className="flex flex-col md:w-full">
      <div className="mt-10 sm:mt-0">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="md:grid md:grid-cols-4 md:gap-6 divide-x">
            <div className="md:col-span-2">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                       <FormInput
                        fieldName={"name"}
                        label={"First name"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"lastName"}
                        label={"Last name"}
                        register={register}
                        formState={formState}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"email"}
                        label={"Email address"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"phone"}
                        label={"phone"}
                        register={register}
                        formState={formState}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <FormInput
                        fieldName={"postalCode"}
                        label={"Postal Code"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <FormInput
                        fieldName={"region"}
                        label={"State / Province"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <FormInput
                        fieldName={"address"}
                        label={"Address"}
                        register={register}
                        formState={formState}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"city"}
                        label={"City"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"country"}
                        label={"Country"}
                        register={register}
                        formState={formState}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"owner"}
                        label={"Owner"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"cvc"}
                        label={"CVV/CVC"}
                        register={register}
                        formState={formState}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"cardNumber"}
                        label={"Card Number"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <FormInput
                        fieldName={"expirationDate"}
                        label={"Expiration Date (MM/YY)"}
                        register={register}
                        formState={formState}
                      />
                    </div>
                    <div className="mt-10 col-span-6">
                      <FormInput
                        fieldName={"acceptTerms"}
                        label={"Accept Terms & Conditions"}
                        register={register}
                        formState={formState}
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded focus:ring-1"
                      />
                      <div className="text-sm text-gray-700 mt-4">
                        You won't be charged until the next step.
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="md:col-span-2">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <div className="text-2xl mt-5">
                            Order Summary
                        </div>
                        <div className="text-sm mt-5">
                            <div className="mt-3">Items:</div>
                            <div className="mt-3">Item(s) Subtotal:</div>
                            <div className="mt-3">Shipping & Handling:</div>
                            <div className="mt-3">Taxes:</div>
                            <div className="mt-3">Total:</div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
