import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from 'lib/utils'

function Switch({
  children,
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer inline-flex w-10 h-5 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all outline-none hover:border-accent-4 focus-visible:border-accent-4 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-surface-3 data-[state=unchecked]:bg-surface-4',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block size-[18px] rounded-full bg-surface-2 ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0'
        )}
      >
        {children}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
