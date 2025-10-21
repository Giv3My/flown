import { type ComponentProps } from 'react'
import { cn } from 'lib/utils'

export const Input = ({ className, type, ...props }: ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-10 rounded-sm border border-surface-6 px-3 py-2 text-sm leading-[1.6] text-text-base transition-colors outline-none placeholder:text-text-faint hover:border-elevated-0 hover:bg-surface-3 focus-visible:border-accent-4 disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
