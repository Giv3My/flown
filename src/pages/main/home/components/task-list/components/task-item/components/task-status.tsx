import { Typography } from 'components'
import { cn } from 'lib/utils'
import { taskStatusMap } from 'pages/main/home/data'
import { type FC } from 'react'
import type { TaskStatus as TaskStatusType } from 'types'

interface TaskStatusProps {
  status: TaskStatusType
}

export const TaskStatus: FC<TaskStatusProps> = ({ status }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div
        className={cn('size-4 rounded-full', {
          'bg-gray-500': status === 'pending',
          'bg-blue-500': status === 'in_progress',
          'bg-green-500': status === 'completed',
        })}
      />
      <Typography
        className={cn('leading-[1]', {
          'text-gray-500 dark:text-gray-300': status === 'pending',
          'text-blue-400 dark:text-blue-300': status === 'in_progress',
          'text-green-300': status === 'completed',
        })}
      >
        {taskStatusMap[status]}
      </Typography>
    </div>
  )
}
