import { statusFilterOptionsMap, type StatusFilterValues } from 'pages/main/home'

export const statusFilterOptionsArray = Object.entries(statusFilterOptionsMap) as [
  StatusFilterValues,
  string,
][]
