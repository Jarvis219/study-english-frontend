import STDButton from '@/components/base/STDButton'
import STDTextFieldHookForm from '@/components/base/hookForm/STDTextFieldHookForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface IInputProps {
  username: string
  password: string
  confirmPassword: string
}

const SignUp = (): JSX.Element => {
  const schema = z
    .object({
      username: z
        .string({
          required_error: 'Username is required',
        })
        .min(
          6,
          'Username must be at least 6 characters long and at most 21 characters long'
        )
        .max(
          21,
          'Username must be at least 6 characters long and at most 21 characters long'
        ),
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

  const onSubmit = async ({
    username,
    password,
  }: IInputProps): Promise<void> => {
    // eslint-disable-next-line no-console
    console.log(username, password)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <STDTextFieldHookForm
        name='username'
        label='Username'
        control={control}
      />
      <STDTextFieldHookForm
        name='password'
        label='Password'
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
        Sign Up
      </STDButton>

      <p className='text-center text-sm text-gray-500'>
        Already have an account?{' '}
        <a
          href='/auth/sign-in'
          className='text-cyan-400 cursor-pointer hover:text-cyan-500 transition-all duration-200 ease-out'>
          Sign In
        </a>
      </p>
    </form>
  )
}

export default memo(SignUp)
