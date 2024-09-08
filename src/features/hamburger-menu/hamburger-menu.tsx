import HamburgerButton from "../../components/ui/button/hamburger-button";
import useToggleHamburger from "../../hooks/useToggleHamburger";
import styles from "./hamburger-menu.module.scss";

export type HamburgerMenuProps = {
  children: React.ReactNode;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const {children} = props;

  const [isHamburgerOpen, toggleIsHamburgerOpen] = useToggleHamburger(false);

  return (
    <div className={styles['hamburger-menu']}>

      <div className={styles['hamburger-menu__button']}>
        <HamburgerButton
          isHamburgerOpen={isHamburgerOpen}
          toggleIsHamburgerOpen={toggleIsHamburgerOpen}
        />
      </div>

      <div className={styles['hamburger-menu__contents'] + (isHamburgerOpen ? ` ${styles['hamburger-menu__contents--open']}` : ` ${styles['hamburger-menu__contents--close']}`)}>
        {children}
      </div>
    </div>
  )
}

export default HamburgerMenu;