import { useRef, type FC, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import { cn } from 'lib/utils'
import type { ModalProps } from './types'
import { Button } from 'components'
import { X } from 'lucide-react'

export const Modal: FC<ModalProps> = ({ children, className, isOpen, closeModal }) => {
  const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))
  const modalWindowRef = useRef<HTMLDivElement | null>(null)

  if (!modalRef.current || !isOpen) {
    return null
  }

  const handleOverlayClick = (e: MouseEvent) => {
    e.stopPropagation()
    closeModal()
  }

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return createPortal(
    <div
      className={cn('fixed inset-0 flex justify-center items-center z-100 bg-[#000]/40', className)}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalWindowRef}
        className="w-[50%] max-w-lg p-7 relative rounded-lg bg-surface-2"
        onClick={handleContentClick}
      >
        <Button
          variant="outline"
          size="sm"
          className="p-1 size-auto absolute top-7 right-7 transition-colors"
          onClick={closeModal}
        >
          <span className="size-5 flex items-center justify-center">
            <X className="size-full" />
          </span>
        </Button>
        {children}
      </div>
    </div>,
    modalRef.current
  )
}
