import { type ComponentProps } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from 'lib/utils'

export const Popover = ({ ...props }: ComponentProps<typeof PopoverPrimitive.Root>) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

export const PopoverTrigger = ({ ...props }: ComponentProps<typeof PopoverPrimitive.Trigger>) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

export const PopoverContent = ({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'w-72 bg-surface-2 outline-hidden text-text-title rounded-md border border-surface-6 p-4 shadow-md z-50 origin-(--radix-popover-content-transform-origin) data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

export const PopoverAnchor = ({ ...props }: ComponentProps<typeof PopoverPrimitive.Anchor>) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}
