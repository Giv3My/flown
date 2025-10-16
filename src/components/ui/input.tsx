import { type ComponentProps } from 'react'
import { cn } from 'lib/utils'

export const Input = ({ className, type, ...props }: ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-10 px-3 py-2 text-sm leading-[1.6] text-text-base placeholder:text-text-faint border border-surface-6 rounded-sm outline-none transition-colors hover:bg-surface-3 hover:border-elevated-0 focus-visible:border-accent-4 disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
