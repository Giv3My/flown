import { type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateTaskSchema } from './schema'
import { taskStatusArray } from './data'
import type { CreateTaskFormValues } from './types'
import { Button, FormField, Select, Typography } from 'components'

interface CreateTaskFormProps {
  handleCreateTask: (values: CreateTaskFormValues) => void
}

export const CreateTaskForm: FC<CreateTaskFormProps> = ({ handleCreateTask }) => {
  const form = useForm<CreateTaskFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(CreateTaskSchema),
    defaultValues: {
      title: '',
      description: '',
      status: taskStatusArray[0]?.value,
    },
  })

  const onSubmit = (values: CreateTaskFormValues) => {
    handleCreateTask(values)
  }

  const handleSubmit = form.handleSubmit(onSubmit)

  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <Typography element="h2" className="text-text-title font-bold">
          New Task
        </Typography>
      </div>
      <div>
        <form className="flex flex-col gap-y-4" onSubmit={(e) => void handleSubmit(e)}>
          <FormField
            label="Title"
            placeholder="Task Title"
            error={form.formState.errors.title}
            {...form.register('title')}
          />
          <FormField
            label="Description"
            placeholder="Task Description"
            error={form.formState.errors.description}
            {...form.register('description')}
          />
          <Controller
            control={form.control}
            name="status"
            render={({ field }) => {
              return (
                <div className="flex flex-col gap-y-1">
                  <label className="text-text-base">Status</label>
                  <Select
                    options={taskStatusArray}
                    value={taskStatusArray.find((opt) => opt.value === field.value) || null}
                    onChange={(selected) => field.onChange(selected?.value || null)}
                  />
                </div>
              )
            }}
          />
          <Button size="lg">Create</Button>
        </form>
      </div>
    </div>
  )
}
