import { type FC, type PropsWithChildren } from 'react'
import type { TypographyElement } from './types'

interface TypographyProps extends PropsWithChildren {
  className?: string
  element?: TypographyElement
}

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  element: Component = 'p',
}) => {
  return <Component className={className}>{children}</Component>
}
