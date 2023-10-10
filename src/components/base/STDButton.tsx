import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ISTDButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
}

const STDButton = ({
  type = 'button',
  children,
  loading = false,
  disabled,
  className = '',
  onClick,
}: ISTDButtonProps): JSX.Element => {
  const classes = twMerge(
    'rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 active:border-cyan-600 active:shadow-none shadow-lg bg-gradient-to-tr from-cyan-600 to-cyan-500 border-cyan-700 text-white',
    className
  )

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={classes}>
      <span className='absolute w-0 h-0 transition-all duration-300 ease-out bg-white group-hover:w-full group-hover:h-full opacity-10' />
      {loading ? <div className='animate-spin' /> : children}
    </button>
  )
}

export default STDButton
