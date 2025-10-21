import type { infer as ZodInfer } from 'zod'
import type { CreateTaskSchema } from './schema'

export type CreateTaskFormValues = ZodInfer<typeof CreateTaskSchema>
