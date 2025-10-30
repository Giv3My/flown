import type { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useModal } from 'hooks'
import { PROTECTED_ROUTES } from 'constants'
import type { Task } from 'types'
import { ActionButton } from './components'
import { TaskStatus } from 'pages/main/home/components/task-view-container'
import { ConfirmModal, Typography } from 'components'
import { SquarePen, ReceiptText, SquareCheckBig, Trash2 } from 'lucide-react'

interface TaskGridItemProps {
  task: Task
  handleCompleteTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export const TaskGridItem: FC<TaskGridItemProps> = ({
  task,
  handleCompleteTask,
  handleDeleteTask,
}) => {
  const navigate = useNavigate()

  const [isCompleteConfirmOpen, handleOpenCompleteConfirm, closeCompleteConfirm] = useModal()
  const [isDeleteConfirmOpen, openDeleteConfirm, closeDeleteConfirm] = useModal()

  const onTaskEditClick = () => {
    void navigate(generatePath(PROTECTED_ROUTES.EDIT_TASK, { id: task.id }))
  }

  const onTaskDetailsClick = () => {
    void navigate(generatePath(PROTECTED_ROUTES.TASK, { id: task.id }))
  }

  const openCompleteConfirm = () => {
    if (task.status === 'completed') {
      toast.info('This task is already completed')
      return
    }

    handleOpenCompleteConfirm()
  }

  const onTaskComplete = () => {
    handleCompleteTask(task.id)
  }

  const onTaskDelete = () => {
    handleDeleteTask(task.id)
  }

  return (
    <div className="p-4 flex flex-col gap-y-3 rounded-md text-text-base bg-surface-2">
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
        <TaskStatus status={task.status} />
      </div>
      <div className="flex items-center gap-x-2">
        <ActionButton
          icon={<SquarePen className="size-full" />}
          tooltipText="Edit task"
          onClick={onTaskEditClick}
        />
        <ActionButton
          icon={<ReceiptText className="size-full" />}
          tooltipText="Open details"
          onClick={onTaskDetailsClick}
        />
        <ActionButton
          className="text-green-500 border-green-500 dark:text-green-300 dark:border-green-300"
          icon={<SquareCheckBig className="size-full" />}
          tooltipText="Complete task"
          onClick={openCompleteConfirm}
        />
        <ActionButton
          className="text-alert border-alert"
          icon={<Trash2 className="size-full" />}
          tooltipText="Delete task"
          onClick={openDeleteConfirm}
        />
      </div>
      <ConfirmModal
        isOpen={isCompleteConfirmOpen}
        handleConfirm={onTaskComplete}
        closeModal={closeCompleteConfirm}
      >
        Are you sure you want to complete task?
      </ConfirmModal>
      <ConfirmModal
        isOpen={isDeleteConfirmOpen}
        handleConfirm={onTaskDelete}
        closeModal={closeDeleteConfirm}
      >
        Are you sure you want to delete task?
      </ConfirmModal>
    </div>
  )
}
