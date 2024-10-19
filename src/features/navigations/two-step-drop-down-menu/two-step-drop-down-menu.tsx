import { LinkProps } from "../../../types/ui-props";
import styles from "./two-step-drop-down-menu.module.scss";

type SubMenuProps = {
  subMenu: LinkProps;
  subsubMenus?: LinkProps[];
}

type TwoStepDropDownMenuProps = {
  navItem: {
    mainMenu: LinkProps;
    subMenus?: SubMenuProps[];
  },
}

type TwoStepDropDownMenusProps = {
  navItems: TwoStepDropDownMenuProps[];
  currentPath?: string;
}

const TwoStepDropDownMenu = (props: TwoStepDropDownMenusProps) => {
  const {navItems, currentPath} = props;

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-menu"]}>
        {navItems.map((item: TwoStepDropDownMenuProps, key: number) => (
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
                {item.navItem.subMenus.map((subItem: SubMenuProps, subKey: number) => (
                  <li className={styles['sub-menu__item']} key={subKey}>
                    <a href={subItem.subMenu.linkText}>
                      <span>{subItem.subMenu.linkText}</span>
                    </a>
                    {subItem.subsubMenus && (
                      <ul className={styles['sub-sub-menu']}>
                        {subItem.subsubMenus.map((subSubItem: LinkProps, subSubKey: number) => (
                          <li key={subSubKey} className={styles['sub-sub-menu__item']}>
                            <a href={subSubItem.linkTo}>
                              <span>{subSubItem.linkText}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default TwoStepDropDownMenu;