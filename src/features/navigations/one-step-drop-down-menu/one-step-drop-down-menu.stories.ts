import type { Meta, StoryObj } from '@storybook/react';
import OneStepDropDownMenu from './one-step-drop-down-menu';

const meta: Meta<typeof OneStepDropDownMenu> = {
  title: 'features/Navigations/OneStepDropDownMenu',
  component: OneStepDropDownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof OneStepDropDownMenu>;

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
          subMenus: {
            linkItems: [
              {linkText: "Submenu-A 1", linkTo: "#"},
              {linkText: "Submenu-A 2", linkTo: "#"},
              {linkText: "Submenu-A 3", linkTo: "#"},
            ]
          }
        }
      },
      {
        navItem: {
          mainMenu: {
            linkText: "Has Submenu-B",
            linkTo: "#"
          },
          subMenus: {
            linkItems: [
              {linkText: "Submenu-B 1", linkTo: "#"},
              {linkText: "Submenu-B 2", linkTo: "#"},
              {linkText: "Submenu-B 3", linkTo: "#"},
              {linkText: "Submenu-B 4", linkTo: "#"},
              {linkText: "Submenu-B 5", linkTo: "#"},
            ]
          }
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
