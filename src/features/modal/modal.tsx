import { ReactNode } from "react";
import { CloseButton } from "../../components/ui/button";
import { ModalType, useModal } from "../../contexts/ModalContext";
import styles from "./modal.module.scss";

type ModalProps = {
  type: ModalType;
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  const {type, children} = props;
  const { state, closeModal } = useModal();

  const handleClose = () => {
    closeModal(type)
  }

  return (
    <>
    {state[type] && (
      <div className={styles['modal']}>
        <div className={styles['modal-inner']}>
          <div className={styles['modal-inner__close-btn']}>
          <CloseButton onClose={handleClose} />
          </div>
          <div className={styles['modal-content']}>
            {children}
          </div>
        </div>
      </div>
     )}
    </>
  )
}

export { Modal };
