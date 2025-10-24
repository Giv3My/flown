import { type ComponentProps, type FC, type ReactNode } from 'react'
import { cn } from 'lib/utils'
import { Button, Tooltip, TooltipContent, TooltipTrigger } from 'components'

interface ActionButtonProps extends ComponentProps<'button'> {
  icon: ReactNode
  tooltipText: string
  onClick: VoidFunction
}

export const ActionButton: FC<ActionButtonProps> = ({ className, icon, tooltipText, onClick }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="sm" className={cn('p-1', className)} onClick={onClick}>
          <span className="flex items-center justify-center">{icon}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  )
}
