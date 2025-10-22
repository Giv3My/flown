import { isDateLike, type Comparator, type StrategyItem } from './types'

const compareDate: Comparator<Date | string> = (a, b) =>
  new Date(a).getTime() - new Date(b).getTime()

const compareString: Comparator<string> = (a, b) => a.localeCompare(b)

const compareNumber: Comparator<number> = (a, b) => a - b

const compareBoolean: Comparator<boolean> = (a, b) => Number(a) - Number(b)

const compareFallback: Comparator = (a, b) => {
  return a === b ? 0 : Number(a) > Number(b) ? 1 : -1
}

const strategies: StrategyItem[] = [
  { when: (a, b) => isDateLike(a) && isDateLike(b), compare: compareDate },
  {
    when: (a, b) => typeof a === 'string' && typeof b === 'string',
    compare: compareString,
  },
  {
    when: (a, b) => typeof a === 'number' && typeof b === 'number',
    compare: compareNumber,
  },
  {
    when: (a, b) => typeof a === 'boolean' && typeof b === 'boolean',
    compare: compareBoolean,
  },
]

export const getComparator = (a: unknown, b: unknown): Comparator =>
  strategies.find((s) => s.when(a, b))?.compare ?? compareFallback
