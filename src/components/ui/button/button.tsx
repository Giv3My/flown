import { type ComponentProps, type FC } from 'react'
import { cn } from 'lib/utils'
import { buttonVariants } from './variants'
import { type VariantProps } from 'class-variance-authority'
import type { ButtonVariants } from './types'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends ComponentProps<'button'>, VariantProps<ButtonVariants> {
  asChild?: boolean
}

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
