import { LinkItemsProps, LinkProps } from "../../../types/ui-props";
import styles from "./one-step-drop-down-menu.module.scss";

type OneStepDropDownMenuProps = {
  navItem: {
    mainMenu: LinkProps;
    subMenus?: LinkItemsProps;
  },
}

type OneStepDropDownMenusProps = {
  navItems: OneStepDropDownMenuProps[];
  currentPath?: string;
}

const OneStepDropDownMenu = (props: OneStepDropDownMenusProps) => {
  const {navItems, currentPath} = props;

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-menu"]}>
        {navItems.map((item: OneStepDropDownMenuProps, key: number) => (
          <li key={key} className={styles['nav-menu__item']}>
            <a 
              href={item.navItem.mainMenu.linkTo} 
              className={[
                item.navItem.subMenus ? styles['nav-menu__item-has-sub'] : '', 
                item.navItem.mainMenu.linkTo === currentPath ? styles['nav-menu__item--current'] : ''
              ].join(' ')}
            >
              <span>{item.navItem.mainMenu.linkText}</span>
            </a>
            {item.navItem.subMenus && (
              <ul className={styles['sub-menu']}>
                {item.navItem.subMenus.linkItems.map((subItem: LinkProps, subKey: number) => (
                  <li className={styles['sub-menu__item']} key={subKey}>
                    <a href={subItem.linkTo}>
                      <span>{subItem.linkText}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default OneStepDropDownMenu;