import { cn } from 'lib/utils'
import ReactSelect from 'react-select'

export const Select: ReactSelect = ({ ...props }) => {
  return (
    <ReactSelect
      classNames={{
        control: ({ menuIsOpen }) =>
          cn(
            'px-3 py-2 h-10 border border-surface-6 rounded-sm text-sm text-text-base hover:border-elevated-0 hover:bg-surface-3',
            {
              'border-accent-4!': menuIsOpen,
            }
          ),
        menu: () => 'p-2 text-text-base rounded-b-md bg-surface-1',
        option: () => 'p-1 transition-colors hover:bg-surface-3',
      }}
      unstyled
      {...props}
    />
  )
}
