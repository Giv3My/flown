import { useState, type FC } from 'react'
import { cn } from 'lib/utils'
import { sortOptionsArray } from './data'
import { sortOptionsMap, type SortBy } from 'pages/main/home'
import type { SortOrder } from 'types'
import { Button, Popover, PopoverContent, PopoverTrigger, Typography } from 'components'
import { ArrowUp } from 'lucide-react'

interface SortingProps {
  sortBy: SortBy
  order: SortOrder
  onSortByChange: (value: SortBy) => void
}

export const Sorting: FC<SortingProps> = ({ sortBy, order, onSortByChange }) => {
  const [open, setOpen] = useState(false)

  const handleSortByChange = (value: SortBy) => () => {
    onSortByChange(value)
    setOpen(false)
  }

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Popover open={open} onOpenChange={toggleOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-x-1">
          <Typography>Sort by: {sortOptionsMap[sortBy]}</Typography>
          <span className="size-4">
            <ArrowUp
              className={cn('size-full transition-transform', {
                'rotate-180': order === 'desc',
              })}
            />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-2">
        <div className="flex flex-col gap-y-2">
          {sortOptionsArray.map(([value, label]) => (
            <Button
              key={value}
              variant="outline"
              className={cn('border-none', {
                'bg-surface-4': sortBy === value,
              })}
              onClick={handleSortByChange(value)}
            >
              <Typography>{label}</Typography>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
