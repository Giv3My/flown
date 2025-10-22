import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useQueryString = <K extends string, T extends string = string>(
  key: K,
  defaultValue: T = '' as T
) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const value = (searchParams.get(key) as T) ?? defaultValue

  const setValue = useCallback(
    (newValue: T | null) => {
      const currentParams = new URLSearchParams(window.location.search)

      if (!newValue) {
        currentParams.delete(key)
      } else {
        currentParams.set(key, newValue)
      }

      setSearchParams(currentParams)
    },
    [key, setSearchParams]
  )

  return [value, setValue] as const
}
