export type Comparator<T = unknown> = (a: T, b: T) => number

export interface StrategyItem {
  when: (a: unknown, b: unknown) => boolean
  compare: Comparator
}

export const isDateLike = (v: unknown): v is Date | string => {
  return v instanceof Date || (typeof v === 'string' && !isNaN(Date.parse(v)))
}
