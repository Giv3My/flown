import { useState, type FC } from 'react'
import { useModal } from 'hooks'
import type { Task } from 'types'
import { TaskListItem } from './components'
import { TaskGridItem } from 'pages/main/home/components/task-view-container'
import { Modal } from 'components'

interface TaskListViewProps {
  tasks: Task[]
  handleCompleteTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export const TaskListView: FC<TaskListViewProps> = ({
  tasks,
  handleCompleteTask,
  handleDeleteTask,
}) => {
  const [selectedTaskId, setSelectedTaskId] = useState('')
  const [isOpen, openModal, closeModal] = useModal()

  const selectedTask = tasks.find((task) => task.id === selectedTaskId)

  const handleSelectTaskId = (id: string) => {
    setSelectedTaskId(id)
    openModal()
  }

  const onCloseModal = () => {
    setSelectedTaskId('')
    closeModal()
  }

  return (
    <div>
      <div className="flex flex-col gap-y-3">
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} handleSelectTaskId={handleSelectTaskId} />
        ))}
      </div>
      {selectedTask && (
        <Modal isOpen={isOpen} closeModal={onCloseModal}>
          <TaskGridItem
            task={selectedTask}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
          />
        </Modal>
      )}
    </div>
  )
}
