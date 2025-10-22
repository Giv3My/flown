import type { FC } from 'react'
import type { Task } from 'types'
import { TaskItem } from './components'

interface TaskListProps {
  tasks: Task[]
  handleCompleteTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export const TaskList: FC<TaskListProps> = ({ tasks, handleCompleteTask, handleDeleteTask }) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  )
}
