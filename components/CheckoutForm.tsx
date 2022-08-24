import { useForm } from "react-hook-form";
import { validateCreditCartDate } from "../utils";

interface CheckoutFormData {
  address: string;
  cardNumber: string;
  city: string;
  country: string;
  cvc: string;
  email: string;
  expirationDate: string;
  lastName: string;
  name: string;
  owner: string;
  phone: string;
  postalCode: string;
  region: string;
  sameAsShipping: boolean;
};

const CheckoutForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState
  } = useForm<CheckoutFormData>();

  const onSubmit = handleSubmit(data => console.log(data))

  console.log('formState =',formState);
  return (
    <div className="flex flex-col md:w-full">
      <div className="mt-10 sm:mt-0">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="md:grid md:grid-cols-4 md:gap-6 divide-x">
            <div className="md:col-span-2">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("name", {required: 'This field is required'})}
                      />
                      {formState.errors?.name && (
                        <span role="alert" className="text-sm font-bold text-red-500">
                          {formState.errors.name?.message}
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("lastName", {required: true})}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("email", {required: true})}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("phone", {required: true})}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("postalCode", {required: true})}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        id="region"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("region")}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("address", {required: true})}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("city", {required: true})}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register("country", {required: true})}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="owner"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Owner
                      </label>
                      <input
                        type="text"
                        {...register("owner")}
                        id="owner"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CVV/CVC
                      </label>
                      <input
                        type="text"
                        {...register("cvc")}
                        id="cvc"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        {...register("cardNumber")}
                        id="cardNumber"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="expirationDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expiration Date (MM/YY)
                      </label>
                      <input
                        type="text"
                        {...register("expirationDate", {
                          required: true,
                          // pattern: /^\d\d\/\d\d$/
                          validate:  validateCreditCartDate
                        })}
                        id="expirationDate"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <section aria-labelledby="billing-heading" className="mt-10 col-span-6">
                      <h2 id="billing-heading" className="text-lg font-medium text-gray-700">
                        Billing information
                      </h2>
                      <div className="mt-2 flex items-center">
                        <input
                          id="same-as-shipping"
                          {...register("sameAsShipping")}
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 border-gray-300 rounded focus:ring-1"
                        />
                        <div className="ml-2">
                          <label htmlFor="same-as-shipping" className="block text-sm font-medium text-gray-700">
                            Same as shipping information
                          </label>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 mt-4">
                        You won't be charged until the next step.
                      </div>
                    </section>
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
