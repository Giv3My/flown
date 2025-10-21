import { type ComponentProps, type FC } from 'react'
import { cn } from 'lib/utils'

export const Input: FC<ComponentProps<'input'>> = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-10 rounded-sm border border-surface-6 px-3 py-2 text-sm leading-[1.6] text-text-base transition-colors outline-none placeholder:text-text-faint aria-invalid:border-alert hover:border-elevated-0 hover:bg-surface-3 focus-visible:border-accent-4 disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
