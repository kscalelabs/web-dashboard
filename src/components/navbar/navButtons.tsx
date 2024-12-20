import React from "react";

import { ExpressiveArrow } from "@/components/ui/iconography/Iconography";
import { navItemLinks, navItems } from "@/components/util/constants";
import ROUTES from "@/lib/types/routes";
import { motion } from "motion/react";

const arrowLinkVariants = {
  hover: {
    opacity: 0.5,
  },
};

const isSignupPage = location.pathname === ROUTES.SIGNUP.path;
const logoutPath =  ROUTES.LOGOUT.path;
export const NavLogInButton = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  return (
    <motion.a
      href={isAuthenticated ? logoutPath : isSignupPage ? ROUTES.SIGNUP.path : ROUTES.LOGIN.path}
      target={"_self"}
      className="font-planar text-2xl whitespace-nowrap text-foreground select-none size-fit self-center pointer-events-auto"
      variants={arrowLinkVariants}
      initial="initial"
      whileHover="hover"
    >
      {isAuthenticated ? "Log out" : isSignupPage ? "Sign Up" : "Log In"}
    </motion.a>
  );
};

export const NavAccountButton = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  return (
    <motion.a
      href={
        isAuthenticated
          ? navItemLinks[2].link
          : isSignupPage
            ? ROUTES.SIGNUP.path
            : ROUTES.LOGIN.path
      }
      target={"_self"}
      className="font-planar text-2xl whitespace-nowrap text-foreground select-none size-fit self-center pointer-events-auto"
      variants={arrowLinkVariants}
      initial="initial"
      whileHover="hover"
    >
      {navItems[2]}
    </motion.a>
  );
};

export const NavRobotsHubButton = () => {
  return (
    <motion.a
      href={navItemLinks[1].link}
      target={"_self"}
      className="font-planar text-2xl whitespace-nowrap text-foreground select-none size-fit self-center pointer-events-auto"
      variants={arrowLinkVariants}
      initial="initial"
      whileHover="hover"
    >
      {navItems[1]}
    </motion.a>
  );
};

export const NavDocsButton = () => {
  return (
    <motion.a
      href={navItemLinks[0].link}
      target={"_blank"}
      className="font-planar text-2xl whitespace-nowrap flex text-foreground flex-row gap-1 size-fit
       items-center select-none self-center pointer-events-auto"
      variants={arrowLinkVariants}
      initial="initial"
      whileHover="hover"
    >
      {navItems[0]} <ExpressiveArrow size={"size-7"} />
    </motion.a>
  );
};
