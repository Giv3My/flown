import { useState, type FC } from 'react'
import { cn } from 'lib/utils'
import { statusFilterOptionsArray } from './data'
import { statusFilterOptionsMap, type StatusFilterValues } from 'pages/main/home'
import { Button, Popover, PopoverContent, PopoverTrigger, Typography } from 'components'

type FilteringProps = {
  activeStatusFilterValue: StatusFilterValues
  onStatusFilterValueChange: (value: StatusFilterValues) => void
}

export const Filtering: FC<FilteringProps> = ({
  activeStatusFilterValue,
  onStatusFilterValueChange,
}) => {
  const [open, setOpen] = useState(false)

  const handleFilterOptionChange = (value: StatusFilterValues) => () => {
    onStatusFilterValueChange(value)
    setOpen(false)
  }

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Popover open={open} onOpenChange={toggleOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Typography>Status: {statusFilterOptionsMap[activeStatusFilterValue]}</Typography>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-2">
        <div className="flex flex-col gap-y-2">
          {statusFilterOptionsArray.map(([value, label]) => (
            <Button
              key={value}
              variant="outline"
              className={cn('border-none', {
                'bg-surface-4': activeStatusFilterValue === value,
              })}
              onClick={handleFilterOptionChange(value)}
            >
              <Typography>{label}</Typography>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
