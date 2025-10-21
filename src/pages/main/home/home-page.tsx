import { useState, type ChangeEventHandler, type FC } from 'react'
import { useFilter, useSort } from 'hooks'
import { sortOptionsMap } from './data'
import type { CreateTaskFormValues } from './components/create-task-form'
import type { ActiveSortOption, ViewMode, SortBy, StatusFilterValues } from './types'
import type { Task } from 'types'
import { Controls, CreateTaskForm, TaskList } from './components'
import { Modal } from 'components'

export const HomePage: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const [activeSortOption, setActiveSortOption] = useState<ActiveSortOption>({
    ...sortOptionsMap.createdAt,
    order: 'desc',
  })
  const [activeStatusFilterValue, setActiveStatusFilterValue] = useState<StatusFilterValues>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])

  const filteredTasks = useFilter(tasks, {
    status: activeStatusFilterValue,
    title: (value) => value.toLowerCase().includes(searchValue.toLocaleLowerCase()),
  })
  const sortedTasks = useSort(filteredTasks, activeSortOption.value, activeSortOption.order)

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSortOptionChange = (value: SortBy) => {
    setActiveSortOption((prev) => {
      if (value === prev?.value) {
        return { ...prev, order: prev.order === 'desc' ? 'asc' : 'desc' }
      }

      return { ...sortOptionsMap[value], order: 'desc' }
    })
  }

  const handleStatusFilterOptionChange = (value: StatusFilterValues) => {
    setActiveStatusFilterValue(value)
  }

  const handleViewModeChange = (viewMode: ViewMode) => () => {
    setViewMode(viewMode)
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
      <Controls
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        activeSortOption={activeSortOption}
        onSortOptionChange={handleSortOptionChange}
        activeStatusFilterValue={activeStatusFilterValue}
        onStatusFilterValueChange={handleStatusFilterOptionChange}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        openModal={openModal}
      />
      <TaskList tasks={sortedTasks} />
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <CreateTaskForm handleCreateTask={handleCreateTask} />
      </Modal>
    </div>
  )
}
