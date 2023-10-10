import { memo, type ReactNode } from 'react'

interface ISPIHelperTextProps {
  children: ReactNode
  prefix?: string
}

const prefixDefault = '!'

const SPIHelperText = ({
  children,
  prefix = prefixDefault,
}: ISPIHelperTextProps): JSX.Element => (
  <p className='text-xs text-red-500 mt-1.5 mb-0'>
    {typeof children === 'string' ? children + prefix : children}
  </p>
)

export default memo(SPIHelperText)
