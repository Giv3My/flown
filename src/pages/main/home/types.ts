import type { TaskStatus } from 'types'

export type SortBy = 'title' | 'status' | 'createdAt'

export type StatusFilterValues = 'all' | TaskStatus

export type ViewMode = 'grid' | 'list'

export type QueryKeys = 'search' | 'sortBy' | 'order' | 'status'
