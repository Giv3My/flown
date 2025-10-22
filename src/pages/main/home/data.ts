import type { TaskStatus } from 'types'
import type { SortBy, StatusFilterValues } from 'pages/main/home'

export const sortOptionsMap: Record<SortBy, string> = {
  createdAt: 'Date',
  title: 'Title',
  status: 'Status',
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
