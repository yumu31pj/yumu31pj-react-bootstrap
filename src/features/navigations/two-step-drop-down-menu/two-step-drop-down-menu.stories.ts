import type { Meta, StoryObj } from '@storybook/react';
import TwoStepDropDownMenu from './two-step-drop-down-menu';

const meta: Meta<typeof TwoStepDropDownMenu> = {
  title: 'features/Navigations/TwoStepDropDownMenu',
  component: TwoStepDropDownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TwoStepDropDownMenu>;

export const Default: Story = {
  args: {
    navItems: [
      {
        navItem: {
          mainMenu: {
            linkText: "Home",
            linkTo: "#"
          }
        }
      },
      {
        navItem: {
          mainMenu: {
            linkText: "About",
            linkTo: "/about/"
          }
        }
      },
      {
        navItem: {
          mainMenu: {
            linkText: "Has Submenu-A",
            linkTo: "#"
          },
          subMenus: [
            {
              subMenu: {linkText: "Submenu-A 1", linkTo: "#"}
            },
            {
              subMenu: {linkText: "Submenu-A 2", linkTo: "#"},
              subsubMenus: [
                {linkText: "SubSubmenu-A 2-1", linkTo: "#"},
                {linkText: "SubSubmenu-A 2-2", linkTo: "#"},
                {linkText: "SubSubmenu-A 2-3", linkTo: "#"},
              ]
            },
            {
              subMenu: {linkText: "Submenu-A 3", linkTo: "#"}
            }
          ]
        }
      },
      {
        navItem: {
          mainMenu: {
            linkText: "Has Submenu-B",
            linkTo: "#"
          },
          subMenus: [
            {
              subMenu: {linkText: "Submenu-B 1", linkTo: "#"}
            },
            {
              subMenu: {linkText: "Submenu-B 2", linkTo: "#"},
              subsubMenus: [
                {linkText: "SubSubmenu-B 2-1", linkTo: "#"},
                {linkText: "SubSubmenu-B 2-2", linkTo: "#"},
                {linkText: "SubSubmenu-B 2-3", linkTo: "#"},
                {linkText: "SubSubmenu-B 2-4", linkTo: "#"},
                {linkText: "SubSubmenu-B 2-5", linkTo: "#"}
              ]
            },
            {
              subMenu: {linkText: "Submenu-B 3", linkTo: "#"}
            },
            {
              subMenu: {linkText: "Submenu-B 4", linkTo: "#"}
            },
            {
              subMenu: {linkText: "Submenu-B 5", linkTo: "#"}
            }
          ]
        }
      },
      {
        navItem: {
          mainMenu: {
            linkText: "Contact",
            linkTo: "#"
          }
        }
      },
    ],
    currentPath: "/about/"
  },
};
