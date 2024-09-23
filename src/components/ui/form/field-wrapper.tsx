import styles from "./field-wrapper.module.scss";

type FieldWrapperProps = {
  children: React.ReactNode;
}

const FieldWrapper = (props: FieldWrapperProps) => {
  const {children} = props;
  // const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className={styles['field-wrapper']}>
      {children}
    </div>
  )
}

export { FieldWrapper };
