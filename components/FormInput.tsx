interface FormInputProps {
  fieldName: string;
  label: string;
  register: any;
  formState: any;
  isRequired: boolean;
  validateFunction?: any;
};

export const FormInput = ({fieldName, label, register, formState, isRequired, validateFunction}: FormInputProps) => {
  return (
    <>
      <label
        htmlFor={fieldName}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="text"
        id={fieldName}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        {...register(fieldName, {required: isRequired === true ? 'This field is required' : '', validate: validateFunction})}
      />
      {formState.errors[fieldName] && (
        <span role="alert" className="text-sm font-bold text-red-500">
          {formState.errors[fieldName]?.message}
        </span>
      )}
    </>
  )
};

export default FormInput;