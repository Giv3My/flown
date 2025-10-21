import { z } from 'zod'
import { taskStatusMap } from 'pages/main/home'

export const CreateTaskSchema = z.object({
  title: z.string().nonempty('Title is required'),
  description: z.string().nonempty('Description is required'),
  status: z.enum(Object.keys(taskStatusMap)),
})
