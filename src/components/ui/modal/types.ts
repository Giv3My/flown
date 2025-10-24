import type { PropsWithChildren } from 'react'

export interface ModalProps extends PropsWithChildren {
  className?: string
  isOpen: boolean
  closeModal: VoidFunction
}
