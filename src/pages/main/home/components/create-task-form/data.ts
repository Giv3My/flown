import { taskStatusMap } from 'pages/main/home'

export const taskStatusArray = Object.entries(taskStatusMap).map(([value, label]) => ({
  value,
  label,
}))
