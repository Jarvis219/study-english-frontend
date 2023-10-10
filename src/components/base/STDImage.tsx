import { imageUrl } from '@/constants'
import { isEmpty } from '@/utils'
import { memo, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ISTDImageProps {
  src: string
  width?: number
  height?: number
  alt?: string
  className?: string
  lazy?: boolean
}

const STDImage = ({
  src,
  width,
  height,
  alt,
  className = '',
  lazy = true,
}: ISTDImageProps): JSX.Element => {
  const classes = twMerge('aspect-[4/3] object-contain', className)
  const [photo, setPhoto] = useState<string>()

  useEffect(() => {
    isEmpty(src) ? setPhoto(imageUrl.defaultImage) : setPhoto(src)
  }, [src])

  return (
    <img
      src={photo}
      alt={alt}
      width={width}
      height={height}
      className={classes}
      loading={lazy ? 'lazy' : 'eager'}
    />
  )
}

export default memo(STDImage)
