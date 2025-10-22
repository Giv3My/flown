import { useMemo } from 'react'
import { getComparator } from './utils'
import type { SortOrder } from 'types'

export const useSort = <T>(items: T[], sortBy: keyof T, order: SortOrder) => {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const valA = a[sortBy]
      const valB = b[sortBy]

      if (!valA) return 1
      if (!valB) return -1
      if (valA === valB) return 0

      const comparator = getComparator(valA, valB)
      const comparison = comparator(valA, valB)

      return order === 'desc' ? -comparison : comparison
    })
  }, [items, sortBy, order])

  return sortedItems
}
