import STDHelperText from '@/components/base/STDHelperText'
import { memo, useState, type HTMLInputTypeAttribute } from 'react'
import { Controller, type Control } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { twMerge } from 'tailwind-merge'

interface ISTDTextFieldHookFormProps {
  name: string
  control: Control<any>
  label: string
  id?: string
  type?: HTMLInputTypeAttribute
  className?: string
  maxLength?: number
  minLength?: number
  required?: boolean
  max?: number
  min?: number
  step?: number
  disabled?: boolean
  defaultValue?: string
}

const STDTextFieldHookForm = ({
  label,
  name,
  control,
  type = 'text',
  id,
  className,
  min,
  max,
  minLength,
  maxLength,
  required = false,
  disabled = false,
  defaultValue,
  step,
}: ISTDTextFieldHookFormProps): JSX.Element => {
  const isPassword = type === 'password'
  const [typeInput, setTypeInput] = useState<HTMLInputTypeAttribute>(type)

  const handleTogglePassword = (): void => {
    setTypeInput((prevType) => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }): JSX.Element => (
        <div className='my-8 w-full relative group'>
          <div className='relative'>
            <input
              id={id}
              {...field}
              type={typeInput}
              name={name}
              min={min}
              maxLength={maxLength}
              max={max}
              step={step}
              minLength={minLength}
              required={required}
              defaultValue={defaultValue}
              disabled={disabled}
              className={twMerge(
                `w-full h-14 pl-4 pr-4 text-sm peer outline-none transform transition-all border border-b-4 rounded-md focus:ring-1 focus:outline-none focus:ring-opacity-50
              ${
                error?.message
                  ? 'border-red-500 focus:ring-red-300 text-red-500'
                  : 'border-gray-300 focus:border-cyan-400 focus:ring-cyan-300'
              }${isPassword ? 'pr-10' : ''}`,
                className
              )}
            />
            {isPassword && (
              <div
                className='absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                onClick={handleTogglePassword}>
                {typeInput === 'password' ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </div>
            )}
          </div>
          <label
            htmlFor={name}
            className={`transform transition-all absolute top-0 left-0 flex items-center text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 ${
              field?.value || error?.message
                ? '-translate-y-full pl-0 h-1/2 text-xs'
                : 'h-full pl-2'
            }`}>
            {label}
          </label>
          {error?.message && <STDHelperText>{error.message}</STDHelperText>}
        </div>
      )}
    />
  )
}

export default memo(STDTextFieldHookForm)
