import { motion } from "motion/react";
import React from "react";
import { ExpressiveArrow } from "@/components/ui/iconography/Iconography";
import { navItemLinks, navItems } from "@/components/util/constants";

const arrowLinkVariants = {
  hover: {
    opacity: 0.5,
  },
};

export const NavLogInButton = () => {
  return (
    <motion.a
      href={navItemLinks[1].link}
      target={navItemLinks[1].target}
      className="font-planar text-2xl -col-end-2 md:-col-end-3 2xl:-col-end-4 text-foreground select-none size-fit self-center pointer-events-auto"
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
      target={navItemLinks[0].target}
      className="font-planar text-2xl -col-end-3 md:-col-end-4 2xl:-col-end-5 flex text-foreground flex-row gap-1 size-fit
       items-center select-none self-center pointer-events-auto"
      variants={arrowLinkVariants}
      initial="initial"
      whileHover="hover"
    >
      {navItems[0]} <ExpressiveArrow size={"size-7"} />
    </motion.a>
  );
};
