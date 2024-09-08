import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { CloseButton } from "../../components/ui/button";
import { ModalType, useModal } from "../../contexts/ModalContext";
import styles from "./modal.module.scss";

type ModalProps = {
  type: ModalType;
  children: string;
}

const Modal = (props: ModalProps) => {
  const {type, children} = props;
  const { state, closeModal } = useModal();

  useEffect(() => {
    if (state.contact) {
      const timer = setTimeout(() => {
        closeModal('contact');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [state.contact, closeModal]);

  const [isClose, setIsClose] = useState(false);

  const handleClose = (isClose: boolean) => {
    setIsClose(isClose);
  };

  return (
    <div className={`${styles['modal']} ${isClose && styles["modal--closed"]}`}>
      {state[type] && (
        <div className={styles['modal-inner']}>
          <div className={styles['modal-inner__close-btn']}>
          <CloseButton onClose={handleClose} />
          </div>
          <div>
            {parse(children)}
          </div>
        </div>
      )}
    </div>
  )
}

export { Modal };
