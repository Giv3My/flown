import type { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useModal } from 'hooks'
import { PROTECTED_ROUTES } from 'constants'
import type { Task } from 'types'
import { TaskStatus } from './components'
import {
  Button,
  ConfirmModal,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Typography,
} from 'components'
import { SquarePen, ReceiptText, SquareCheckBig, Trash2 } from 'lucide-react'

interface TaskItemProps {
  task: Task
  handleCompleteTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

export const TaskItem: FC<TaskItemProps> = ({ task, handleCompleteTask, handleDeleteTask }) => {
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
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="sm" className="p-1" onClick={onTaskEditClick}>
                <span className="flex items-center justify-center">
                  <SquarePen className="size-full" />
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit task</TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="sm" className="p-1" onClick={onTaskDetailsClick}>
                <span className="flex items-center justify-center">
                  <ReceiptText className="size-full" />
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Open details</TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                size="sm"
                className="p-1 text-green-500 border-green-500 dark:text-green-300 dark:border-green-300"
                onClick={openCompleteConfirm}
              >
                <span className="flex items-center justify-center">
                  <SquareCheckBig className="size-full" />
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Complete task</TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                size="sm"
                className="p-1 text-alert border-alert"
                onClick={openDeleteConfirm}
              >
                <span className="flex items-center justify-center">
                  <Trash2 className="size-full" />
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Delete task</TooltipContent>
          </Tooltip>
        </div>
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
