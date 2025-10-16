import { type ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from 'lib/utils'
import { buttonVariants } from './variants'
import { type VariantProps } from 'class-variance-authority'
import type { ButtonVariants } from './types'

interface ButtonProps extends ComponentProps<'button'>, VariantProps<ButtonVariants> {
  asChild?: boolean
}

export const Button = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
