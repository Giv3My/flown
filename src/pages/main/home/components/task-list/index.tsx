import type { FC } from 'react'
import type { Task } from 'types'
import { TaskItem } from './components'

interface TaskListProps {
  tasks: Task[]
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </div>
    </div>
  )
}
