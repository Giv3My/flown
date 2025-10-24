import { type FC } from 'react'
import type { Task } from 'types'
import { TaskGridItem } from 'pages/main/home/components/task-view-container'

interface TaskGridViewProps {
  tasks: Task[]
  handleCompleteTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export const TaskGridView: FC<TaskGridViewProps> = ({
  tasks,
  handleCompleteTask,
  handleDeleteTask,
}) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskGridItem
          key={task.id}
          task={task}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  )
}
