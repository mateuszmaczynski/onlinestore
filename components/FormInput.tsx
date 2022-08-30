interface FormInputProps {
  fieldName: string;
  formState: any;
  label: string;
  register: any;
  className?: string;
  type?: string;
};

const styles = "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";

export const FormInput = ({fieldName, label, register, formState, type = "text", className = styles}: FormInputProps) => {
  return (
    <>
      {type === "text" && (
        <>
        <label
          htmlFor={fieldName}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
          <input
            type={type}
            id={fieldName}
            className={className}
            {...register(fieldName)}
          />
        </>
      )}

      {type === "checkbox" && (
        <div className="mt-2 flex items-center">
          <input
            type={type}
            id={fieldName}
            className={className}
            {...register(fieldName)}
          />
          <div className="ml-2">
            <label
              htmlFor={fieldName}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          </div>
        </div>
      )}
      {formState.errors[fieldName] && (
        <span role="alert" className="text-sm font-bold text-red-500">
          {formState.errors[fieldName]?.message}
        </span>
      )}
    </>
  )
};

export default FormInput;