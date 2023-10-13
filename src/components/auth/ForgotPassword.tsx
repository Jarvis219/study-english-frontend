import STDButton from '@/components/base/STDButton'
import STDTextFieldHookForm from '@/components/base/hookForm/STDTextFieldHookForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface IInputProps {
  password: string
  confirmPassword: string
}

const ForgotPassword = (): JSX.Element => {
  const schema = z
    .object({
      password: z
        .string({
          required_error: 'Password is required',
        })
        .min(
          8,
          'Password must be at least 8 characters long and at most 21 characters long'
        )
        .max(
          21,
          'Password must be at least 8 characters long and at most 21 characters long'
        ),
      confirmPassword: z
        .string({
          required_error: 'Password is required',
        })
        .min(
          8,
          'Password must be at least 8 characters long and at most 21 characters long'
        )
        .max(
          21,
          'Password must be at least 8 characters long and at most 21 characters long'
        ),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Password and Confirm Password must be the same',
      path: ['confirmPassword'],
    })

  const { control, handleSubmit } = useForm<IInputProps>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async ({ password }: IInputProps): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(password)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <STDTextFieldHookForm
        name='password'
        label='New password'
        control={control}
        type='password'
      />
      <STDTextFieldHookForm
        name='confirmPassword'
        label='Confirm Password'
        control={control}
        type='password'
      />
      <STDButton type='submit' className='w-full my-5'>
        Reset Password
      </STDButton>
    </form>
  )
}

export default memo(ForgotPassword)
