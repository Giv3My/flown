import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center outline-none gap-x-3 whitespace-nowrap rounded-sm font-medium cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-accent-4 text-surface-0 hover:bg-accent-5 active:text-surface-0/50',
        outline:
          'bg-surface-0 border border-surface-6 text-text-base hover:bg-surface-3 hover:border-elevated-0 active:text-text-base/50',
      },
      size: {
        lg: 'h-12 px-5 text-base leading-[1.6]',
        md: 'h-10 px-4 text-sm leading-[1.6]',
        sm: 'h-8 px-3 text-[13px] leading-[1.6]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)
