import { sortOptionsMap, type SortBy } from 'pages/main/home'

export const sortOptionsArray = Object.entries(sortOptionsMap) as [SortBy, string][]
