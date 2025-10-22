import { type FC, type PropsWithChildren } from 'react'
import type { ModalProps } from './types'
import { Button, Modal, Typography } from 'components'

interface ConfirmModalProps extends ModalProps {
  handleConfirm: VoidFunction
}

export const ConfirmModal: FC<PropsWithChildren<ConfirmModalProps>> = ({
  children,
  isOpen,
  handleConfirm,
  closeModal,
}) => {
  const onConfirm = () => {
    handleConfirm()
    closeModal()
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="h-full flex flex-col justify-between">
        <div className="grow">
          <Typography element="h3" className="text-text-title">
            {children}
          </Typography>
        </div>
        <div className="mt-[50px] flex items-center justify-end gap-x-4">
          <Button variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </div>
      </div>
    </Modal>
  )
}
