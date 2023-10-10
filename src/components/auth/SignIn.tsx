import STDButton from '@/components/base/STDButton'
import STDTextFieldHookForm from '@/components/base/hookForm/STDTextFieldHookForm'
import { imageUrl } from '@/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import STDImage from '../base/STDImage'

interface IInputProps {
  username: string
  password: string
}

const SignIn = (): JSX.Element => {
  const schema = z.object({
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
    <div className='w-full h-full'>
      <div className='w-full mt-8'>
        <div className='flex justify-center items-center'>
          <STDImage
            src={imageUrl.logo}
            alt='Logo'
            width={82}
            height={102}
            lazy={false}
          />
          <STDImage
            src={imageUrl.eduLogo}
            alt='Logo'
            width={163}
            height={69}
            lazy={false}
          />
        </div>
        <div className='text-center mt-14'>
          <span className='text-2xl font-bold'>Sign In</span> to continue
        </div>
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
          <p className='text-sm text-gray-500 text-center w-full hover:text-cyan-400 cursor-pointer transition-all duration-200 ease-out'>
            Forgot Password
          </p>
          <STDButton type='submit' className='w-full my-5'>
            Sign In
          </STDButton>

          <p className='text-center text-sm text-gray-500'>
            Don&apos;t have an account?{' '}
            <span className='text-cyan-400 cursor-pointer hover:text-cyan-500 transition-all duration-200 ease-out'>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default memo(SignIn)
