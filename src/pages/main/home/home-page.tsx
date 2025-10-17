import { useState, type ChangeEventHandler, type FC } from 'react'
import { sortOptionsMap } from './data'
import type { ActiveSortOption, ViewMode, SortBy, StatusFilterValues } from './types'
import { Controls } from './components'

export const HomePage: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [activeSortOption, setActiveSortOption] = useState<ActiveSortOption>({
    ...sortOptionsMap.createdAt,
    order: 'desc',
  })
  const [activeStatusFilterValue, setActiveStatusFilterValue] = useState<StatusFilterValues>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSortOptionChange = (value: SortBy) => {
    setActiveSortOption((prev) => {
      if (value === prev?.value) {
        return { ...prev, order: prev.order === 'desc' ? 'asc' : 'desc' }
      }

      return { ...sortOptionsMap[value], order: 'desc' }
    })
  }

  const handleStatusFilterOptionChange = (value: StatusFilterValues) => {
    setActiveStatusFilterValue(value)
  }

  const handleViewModeChange = (viewMode: ViewMode) => () => {
    setViewMode(viewMode)
  }

  return (
    <div>
      <Controls
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        activeSortOption={activeSortOption}
        onSortOptionChange={handleSortOptionChange}
        activeStatusFilterValue={activeStatusFilterValue}
        onStatusFilterValueChange={handleStatusFilterOptionChange}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
      />
    </div>
  )
}
