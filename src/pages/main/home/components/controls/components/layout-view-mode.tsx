import { type FC } from 'react'
import { cn } from 'lib/utils'
import type { ViewMode } from 'pages/main/home'
import { LayoutGrid, LayoutList } from 'lucide-react'

interface LayoutViewModeProps {
  viewMode: ViewMode
  onViewModeChange: (viewMode: ViewMode) => VoidFunction
}

export const LayoutViewMode: FC<LayoutViewModeProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="p-1 flex items-center text-text-base gap-x-1 rounded-md bg-surface-4">
      <span
        className={cn('p-1 rounded-md cursor-pointer transition-colors hover:bg-surface-3', {
          'bg-surface-2': viewMode === 'grid',
        })}
        onClick={onViewModeChange('grid')}
      >
        <LayoutGrid />
      </span>
      <span
        className={cn('p-1 rounded-md cursor-pointer transition-colors hover:bg-surface-3', {
          'bg-surface-2': viewMode === 'list',
        })}
        onClick={onViewModeChange('list')}
      >
        <LayoutList />
      </span>
    </div>
  )
}
