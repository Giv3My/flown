import type { TaskStatus } from 'types'

export type SortBy = 'title' | 'status' | 'createdAt'

export type SortOrder = 'asc' | 'desc'

export interface SortOption {
  value: SortBy
  label: string
}

export interface ActiveSortOption extends SortOption {
  order: SortOrder
}

export type StatusFilterValues = 'all' | TaskStatus

export type ViewMode = 'grid' | 'list'
