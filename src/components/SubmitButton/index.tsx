import { FC } from 'react'

interface SubmitButtonProps {
  buttonText: string
  onClick: () => void
  [rest:keyof any]: any
}

const SubmitButton: FC<SubmitButtonProps> = ({
  buttonText,
  onClick,
  ...rest
}) => (
  <div className="text-center text-lg-start mt-4 pt-2">
    <button
      type="button"
      className="btn btn-primary btn-lg"
      onClick={onClick}
      {...rest}
    >
      {buttonText}
    </button>
  </div>
)

export default SubmitButton
