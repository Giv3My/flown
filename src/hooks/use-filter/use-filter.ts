import { useMemo } from 'react'
import { isFilterPredicate, type Filters } from './types'

export const useFilter = <Item>(items: Item[], filters: Filters<Item>) => {
  const filteredItems = useMemo(() => {
    const filterKeys = Object.keys(filters) as (keyof Item)[]

    if (filterKeys.length === 0) {
      return items
    }

    return items.filter((item) => {
      return filterKeys.every((key) => {
        const filterValue = filters[key]
        const itemValue = item[key]

        if (filterValue === 'all') {
          return true
        }

        if (isFilterPredicate(filterValue)) {
          return filterValue(itemValue)
        }

        return itemValue === filterValue
      })
    })
  }, [items, filters])

  return filteredItems
}
