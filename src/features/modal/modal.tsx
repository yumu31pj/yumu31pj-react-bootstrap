import parse from "html-react-parser";
import { useState } from "react";
import { CloseButton } from "../../components/ui/button";
import styles from "./modal.module.scss";

type ModalProps = {
  children: string;
}

const Modal = (props: ModalProps) => {
  const {children} = props;

  const [isClose, setIsClose] = useState(false);

  const handleClose = (isClose: boolean) => {
    setIsClose(isClose);
  };

  return (
    <div className={`${styles['modal']} ${isClose && styles["modal--closed"]}`}>
      <div className={styles['modal-inner']}>
        <div className={styles['modal-inner__close-btn']}>
        <CloseButton onClose={handleClose} />
        </div>
        <div>
          {parse(children)}
        </div>
      </div>
    </div>
  )
}

export { Modal };
