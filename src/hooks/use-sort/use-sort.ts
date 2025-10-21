import { useMemo } from 'react'
import { isDateLike } from './types'
import type { SortOrder } from 'types'

export const useSort = <T>(items: T[], sortBy: keyof T, order: SortOrder) => {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const valA = a[sortBy]
      const valB = b[sortBy]

      if (!valA) return 1
      if (!valB) return -1
      if (valA === valB) return 0

      let comparison = 0

      if (isDateLike(valA) && isDateLike(valB)) {
        comparison = new Date(valA).getTime() > new Date(valB).getTime() ? 1 : -1
      } else if (typeof valA === 'string' && typeof valB === 'string') {
        comparison = valA.localeCompare(valB)
      } else {
        comparison = valA > valB ? 1 : -1
      }

      return order === 'desc' ? -comparison : comparison
    })
  }, [items, sortBy, order])

  return sortedItems
}
