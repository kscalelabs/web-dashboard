import { FaRobot, FaTerminal } from "react-icons/fa";

import ROUTES from "@/lib/types/routes";

export interface BaseNavItem {
  name: string;
  path: string;
  isExternal?: boolean;
  icon?: JSX.Element;
}

export interface NavItem extends BaseNavItem {
  icon?: JSX.Element;
}

export const DEFAULT_NAV_ITEMS: BaseNavItem[] = [
  {
    name: "Robots Hub",
    path: ROUTES.BOTS.BROWSE.path,
    icon: <FaRobot />,
  },
];

const TERMINAL_NAV_ITEM: BaseNavItem = {
  name: "Terminal",
  path: ROUTES.TERMINAL.path,
  icon: <FaTerminal />,
};

export const AUTHENTICATED_NAV_ITEMS: BaseNavItem[] = [];

export const getNavItems = (
  isAuthenticated: boolean,
  isAdmin: boolean,
): BaseNavItem[] => {
  let navItems = [...DEFAULT_NAV_ITEMS];

  if (isAdmin) {
    navItems = [TERMINAL_NAV_ITEM, ...navItems];
  }

  if (isAuthenticated) {
    navItems = [...AUTHENTICATED_NAV_ITEMS, ...navItems];
  }

  return navItems;
};
