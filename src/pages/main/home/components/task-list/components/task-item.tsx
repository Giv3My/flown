import type { FC } from 'react'
import type { Task } from 'types'
import { Typography } from 'components'

interface TaskItemProps {
  task: Task
}

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="p-4 basis-[33%] min-h-[200px] flex flex-col gap-y-2 rounded-md text-text-base bg-surface-2">
      <div className="flex items-center gap-x-2">
        <div className="size-10 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=a04" alt="user-image" className="size-full" />
        </div>
        <Typography element="h3" className="text-text-title">
          {task.title}
        </Typography>
      </div>
      <Typography className="line-clamp-2 break-words">{task.description}</Typography>
      <div className="grow flex items-end">
        <Typography>Status: {task.status}</Typography>
      </div>
    </div>
  )
}
