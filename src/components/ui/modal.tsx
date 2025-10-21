import { useRef, type FC, type PropsWithChildren, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { useOnClickOutside } from 'usehooks-ts'
import { Button } from 'components'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  closeModal: VoidFunction
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, isOpen, closeModal }) => {
  const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))
  const modalWindowRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(modalWindowRef as RefObject<HTMLDivElement>, () => {
    closeModal()
  })

  if (!modalRef.current || !isOpen) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center z-[1] bg-[#000]/40">
      <div ref={modalWindowRef} className="w-[80%] max-w-lg p-5 relative rounded-lg bg-surface-2">
        <Button
          variant="outline"
          size="sm"
          className="p-1 size-auto absolute top-5 right-5 transition-colors"
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
