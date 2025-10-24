import type { TaskStatus } from 'types'
import type { SortBy, StatusFilterValues } from 'pages/main/home'

export const sortOptionsMap: Record<SortBy, string> = {
  createdAt: 'Date',
  title: 'Title',
  status: 'Status',
}

export const taskStatusMap: Record<TaskStatus, string> = {
  pending: 'To Do',
  in_progress: 'In Progress',
  completed: 'Done',
}

export const statusFilterOptionsMap: Record<StatusFilterValues, string> = {
  all: 'All',
  ...taskStatusMap,
}
