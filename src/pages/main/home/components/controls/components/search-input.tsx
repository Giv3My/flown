import { useRef, useState, type ChangeEventHandler, type FC, type RefObject } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { cn } from 'lib/utils'
import { Input } from 'components'
import { Search } from 'lucide-react'

interface SearchInputProps {
  searchValue: string
  onSearchChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchInput: FC<SearchInputProps> = ({ searchValue, onSearchChange }) => {
  const [open, setOpen] = useState(false)

  const searchInputContainerRef = useRef<HTMLDivElement | null>(null)

  const handleOutsideClick = () => {
    if (searchValue) {
      return
    }

    setOpen(false)
  }

  useOnClickOutside(searchInputContainerRef as RefObject<HTMLElement>, handleOutsideClick)

  const onSearchClick = () => {
    if (searchValue) {
      return
    }

    setOpen((prev) => !prev)
  }

  return (
    <div
      ref={searchInputContainerRef}
      className={cn(
        'inline-flex items-center gap-x-1 rounded-full transition-colors cursor-pointer',
        {
          'bg-surface-4': open,
        }
      )}
    >
      <span className="p-1 size-10 flex items-center justify-center text-text-base rounded-full transition-colors hover:bg-surface-4">
        <Search onClick={onSearchClick} />
      </span>
      {open && (
        <Input
          className="h-auto p-0 pl-[2px] border-none rounded-full hover:bg-inherit"
          value={searchValue}
          onChange={onSearchChange}
          autoFocus
        />
      )}
    </div>
  )
}
