import { type FC } from 'react'
import type { ViewMode } from 'pages/main/home'
import type { Task } from 'types'
import { TaskGridView, TaskListView } from './components'

interface TaskListProps {
  viewMode: ViewMode
  tasks: Task[]
  handleCompleteTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export const TaskViewContainer: FC<TaskListProps> = ({
  viewMode,
  tasks,
  handleCompleteTask,
  handleDeleteTask,
}) => {
  return (
    <div className="mt-5">
      {viewMode === 'grid' ? (
        <TaskGridView
          tasks={tasks}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      ) : (
        <TaskListView
          tasks={tasks}
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  )
}
