import { FC } from 'react'

interface InputProps {
  type: string
  id: string
  placeholder: string
  onChange : React.ChangeEventHandler<HTMLInputElement> ,
}

/**
 * InputField
 * Component For Input Field 
 */
const InputField: FC<InputProps> = ({
  type,
  id,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <div className="form-outline mb-4">
      <input
        type={type}
        id={id}
        className="form-control form-control-lg"
        placeholder={placeholder}
        required
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}

export default InputField
