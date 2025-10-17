import { useState, type FC } from 'react'
import { cn } from 'lib/utils'
import { sortOptionsArray } from './data'
import type { ActiveSortOption, SortBy } from 'pages/main/home'
import { Button, Popover, PopoverContent, PopoverTrigger, Typography } from 'components'
import { ArrowUp } from 'lucide-react'

interface SortingProps {
  activeSortOption: ActiveSortOption
  onSortOptionChange: (value: SortBy) => void
}

export const Sorting: FC<SortingProps> = ({ activeSortOption, onSortOptionChange }) => {
  const [open, setOpen] = useState(false)

  const handleSortOptionChange = (value: SortBy) => () => {
    onSortOptionChange(value)
    setOpen(false)
  }

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Popover open={open} onOpenChange={toggleOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-x-1">
          <Typography>Sort by: {activeSortOption.label}</Typography>
          <span className="size-4">
            <ArrowUp
              className={cn('size-full transition-transform', {
                'rotate-180': activeSortOption.order === 'desc',
              })}
            />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-2">
        <div className="flex flex-col gap-y-2">
          {sortOptionsArray.map((option) => (
            <Button
              key={option.value}
              variant="outline"
              className={cn('border-none', {
                'bg-surface-4': activeSortOption.value === option.value,
              })}
              onClick={handleSortOptionChange(option.value)}
            >
              <Typography>{option.label}</Typography>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
