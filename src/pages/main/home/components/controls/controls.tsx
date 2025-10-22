import { useEffect, useState, type ChangeEventHandler, type FC } from 'react'
import { useDebounce, useQueryString } from 'hooks'
import type { ViewMode, SortBy, StatusFilterValues, QueryKeys } from 'pages/main/home'
import type { SortOrder } from 'types'
import { LayoutViewMode, SearchInput, Sorting, Filtering } from './components'
import { Button, Typography } from 'components'

interface ControlsProps {
  viewMode: ViewMode
  onViewModeChange: (viewMode: ViewMode) => VoidFunction
  openModal: VoidFunction
}

export const Controls: FC<ControlsProps> = ({ viewMode, onViewModeChange, openModal }) => {
  const [search, setSearch] = useQueryString<QueryKeys>('search')
  const [sortBy, setSortBy] = useQueryString<QueryKeys, SortBy>('sortBy', 'createdAt')
  const [order, setOrder] = useQueryString<QueryKeys, SortOrder>('order', 'desc')
  const [statusFilter, setStatusFilter] = useQueryString<QueryKeys, StatusFilterValues>(
    'status',
    'all'
  )

  const [searchValue, setSearchValue] = useState(search)
  const debouncedSearch = useDebounce(searchValue, 300)

  useEffect(() => {
    setSearch(debouncedSearch)
  }, [debouncedSearch])

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
  }

  const onSortByChange = (value: SortBy) => {
    setSortBy(value)

    if (sortBy === value) {
      const newOrder = order === 'desc' ? 'asc' : 'desc'
      setOrder(newOrder)
      return
    }

    setOrder('desc')
  }

  const onStatusFilterValueChange = (value: StatusFilterValues) => {
    setStatusFilter(value)
  }

  return (
    <>
      <div className="p-4 flex items-center gap-x-4 bg-surface-2 rounded-md">
        <div className="grow">
          <SearchInput searchValue={searchValue} onSearchChange={onSearchChange} />
        </div>
        <div>
          <Sorting sortBy={sortBy} order={order} onSortByChange={onSortByChange} />
        </div>
        <div>
          <Filtering
            activeStatusFilter={statusFilter}
            onStatusFilterChange={onStatusFilterValueChange}
          />
        </div>
        <div>
          <LayoutViewMode viewMode={viewMode} onViewModeChange={onViewModeChange} />
        </div>
        <div>
          <Button onClick={openModal}>
            <Typography>Create Task</Typography>
          </Button>
        </div>
      </div>
    </>
  )
}
