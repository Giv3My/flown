import { useId, type ComponentProps, type FC } from 'react'
import type { FieldError } from 'react-hook-form'
import { cn } from 'lib/utils'
import { Input, Typography } from 'components'

interface FormField extends ComponentProps<'input'> {
  label: string
  error?: FieldError
}

export const FormField: FC<FormField> = ({ className, label, error, ...props }) => {
  const id = useId()

  return (
    <div className={cn('flex flex-col gap-y-1', className)}>
      <label htmlFor={id} className="text-text-base">
        {label}
      </label>
      <Input id={id} type="text" aria-invalid={!!error} {...props} />
      {error && <Typography className="text-alert text-xs">{error.message}</Typography>}
    </div>
  )
}
