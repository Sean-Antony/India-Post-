const fixedInputClass=" rounded-md appearance-none relative block w-[500px] h-[60px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#B01E1D] focus:border-[#B01E1D] focus:z-10 sm:text-sm"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}){
    return(
        <div className="my-5 text-left">
            <label htmlFor={labelFor}>
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
              style={{ backgroundColor: '#F7F7F9' }}
            />
          </div>
    )
}