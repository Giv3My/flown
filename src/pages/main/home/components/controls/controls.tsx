import { type ChangeEventHandler, type FC } from 'react'
import type { ActiveSortOption, ViewMode, SortBy, StatusFilterValues } from 'pages/main/home'
import { LayoutViewMode, SearchInput, Sorting, Filtering } from './components'
import { Button, Typography } from 'components'

interface ControlsProps {
  searchValue: string
  onSearchChange: ChangeEventHandler<HTMLInputElement>
  activeSortOption: ActiveSortOption
  onSortOptionChange: (value: SortBy) => void
  activeStatusFilterValue: StatusFilterValues
  onStatusFilterValueChange: (value: StatusFilterValues) => void
  viewMode: ViewMode
  onViewModeChange: (viewMode: ViewMode) => VoidFunction
  openModal: VoidFunction
}

export const Controls: FC<ControlsProps> = ({
  searchValue,
  onSearchChange,
  activeSortOption,
  onSortOptionChange,
  activeStatusFilterValue,
  onStatusFilterValueChange,
  viewMode,
  onViewModeChange,
  openModal,
}) => {
  return (
    <>
      <div className="p-4 flex items-center gap-x-4 bg-surface-2 rounded-md">
        <div className="grow">
          <SearchInput searchValue={searchValue} onSearchChange={onSearchChange} />
        </div>
        <div>
          <Sorting activeSortOption={activeSortOption} onSortOptionChange={onSortOptionChange} />
        </div>
        <div>
          <Filtering
            activeStatusFilterValue={activeStatusFilterValue}
            onStatusFilterValueChange={onStatusFilterValueChange}
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
