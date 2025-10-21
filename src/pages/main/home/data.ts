import type { TaskStatus } from 'types'
import type { SortBy, SortOption, StatusFilterValues } from 'pages/main/home'

export const sortOptionsMap: Record<SortBy, SortOption> = {
  createdAt: {
    value: 'createdAt',
    label: 'Date',
  },
  title: {
    value: 'title',
    label: 'Title',
  },
  status: {
    value: 'status',
    label: 'Status',
  },
}

export const taskStatusMap: Record<TaskStatus, string> = {
  pending: 'Pending',
  in_progress: 'In progress',
  completed: 'Completed',
}

export const statusFilterOptionsMap: Record<StatusFilterValues, string> = {
  all: 'All',
  ...taskStatusMap,
}
