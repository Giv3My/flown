import { useState, type FC } from 'react'
import { toast } from 'react-toastify'
import { useFilter, useModal, useQueryString, useSort } from 'hooks'
import type { CreateTaskFormValues } from './components/create-task-form'
import { type ViewMode, type SortBy, type StatusFilterValues, type QueryKeys } from './types'
import type { SortOrder, Task } from 'types'
import { Controls, CreateTaskForm, TaskViewContainer } from './components'
import { Modal } from 'components'

export const HomePage: FC = () => {
  const [search] = useQueryString<QueryKeys>('search')
  const [sortBy] = useQueryString<QueryKeys, SortBy>('sortBy', 'createdAt')
  const [order] = useQueryString<QueryKeys, SortOrder>('order', 'desc')
  const [statusFilter] = useQueryString<QueryKeys, StatusFilterValues>('status', 'all')

  const [isModalOpen, openModal, closeModal] = useModal()

  const [tasks, setTasks] = useState<Task[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>(
    () => (localStorage.getItem('task-list-view') as ViewMode) ?? 'grid'
  )

  const filteredTasks = useFilter(tasks, {
    status: statusFilter,
    title: (value) => value.toLowerCase().includes(search.toLocaleLowerCase()),
  })
  const sortedTasks = useSort(filteredTasks, sortBy, order)

  const handleViewModeChange = (viewMode: ViewMode) => () => {
    setViewMode(viewMode)
    localStorage.setItem('task-list-view', viewMode)
  }

  const handleCreateTask = (values: CreateTaskFormValues) => {
    const newTask = {
      ...values,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    } as Task

    setTasks((prev) => [...prev, newTask])
    closeModal()
  }

  const handleCompleteTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: 'completed' } : task))
    )
    toast.success('Task was completed successfully')
  }

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
    toast.success('Task was deleted successfully')
  }

  return (
    <div>
      <Controls viewMode={viewMode} onViewModeChange={handleViewModeChange} openModal={openModal} />
      <TaskViewContainer
        viewMode={viewMode}
        tasks={sortedTasks}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
      />
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <CreateTaskForm handleCreateTask={handleCreateTask} />
      </Modal>
    </div>
  )
}
