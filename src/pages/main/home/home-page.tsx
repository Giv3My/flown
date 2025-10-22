import { useState, type FC } from 'react'
import { useFilter, useQueryString, useSort } from 'hooks'
import type { CreateTaskFormValues } from './components/create-task-form'
import { type ViewMode, type SortBy, type StatusFilterValues, type QueryKeys } from './types'
import type { SortOrder, Task } from 'types'
import { Controls, CreateTaskForm, TaskList } from './components'
import { Modal } from 'components'

export const HomePage: FC = () => {
  const [search] = useQueryString<QueryKeys>('search')
  const [sortBy] = useQueryString<QueryKeys, SortBy>('sortBy', 'createdAt')
  const [order] = useQueryString<QueryKeys, SortOrder>('order', 'desc')
  const [statusFilter] = useQueryString<QueryKeys, StatusFilterValues>('status', 'all')

  const [viewMode, setViewMode] = useState<ViewMode>(
    () => (localStorage.getItem('task-list-view') as ViewMode) ?? 'grid'
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])

  const filteredTasks = useFilter(tasks, {
    status: statusFilter,
    title: (value) => value.toLowerCase().includes(search.toLocaleLowerCase()),
  })
  const sortedTasks = useSort(filteredTasks, sortBy, order)

  const handleViewModeChange = (viewMode: ViewMode) => () => {
    setViewMode(viewMode)
    localStorage.setItem('task-list-view', viewMode)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
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

  return (
    <div>
      <Controls viewMode={viewMode} onViewModeChange={handleViewModeChange} openModal={openModal} />
      <TaskList tasks={sortedTasks} />
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <CreateTaskForm handleCreateTask={handleCreateTask} />
      </Modal>
    </div>
  )
}
