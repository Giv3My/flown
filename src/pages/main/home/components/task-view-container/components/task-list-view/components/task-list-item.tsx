import type { FC } from 'react'
import type { Task } from 'types'
import { TaskStatus } from 'pages/main/home/components/task-view-container'
import { Typography } from 'components'

interface TaskListItemProps {
  task: Task
  handleSelectTaskId: (id: string) => void
}

export const TaskListItem: FC<TaskListItemProps> = ({ task, handleSelectTaskId }) => {
  const onSelectTask = () => {
    handleSelectTaskId(task.id)
  }

  return (
    <div
      className="p-4 flex items-center justify-between gap-x-4 rounded-md text-text-base cursor-pointer bg-surface-2 transition-colors hover:bg-surface-3"
      onClick={onSelectTask}
    >
      <div className="basis-[30%]">
        <TaskStatus status={task.status} />
      </div>
      <div className="grow">
        <Typography element="h3" className="text-text-title">
          {task.title}
        </Typography>
      </div>
      <div className="w-[30%]">
        <Typography className="w-full line-clamp-1 break-words">{task.description}</Typography>
      </div>
    </div>
  )
}
