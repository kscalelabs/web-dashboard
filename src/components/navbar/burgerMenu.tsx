import { ExpressiveArrow } from "@/components/ui/iconography/Iconography";
import {
  navItemLinksMobile,
  navItemsMobile,
  transitionEaseLinearDuration300,
} from "@/components/util/constants";
import { motion } from "motion/react";

export const BurgerMenu = (isOpen: boolean, isAuth: boolean) => {
  return isOpen ? (
    <div className={"grid-m"}>
      <motion.div
        className={
          "flex flex-col col-span-full list-none justify-evenly h-[100dvh]"
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "circOut" }}
      >
        {navItemsMobile.map((navItem, index) => {
          return (
            <motion.button
              key={index}
              className={
                "col-span-full font-planar font-normal capitalize text-4xl select-none flex flex-row text-foreground w-fit pointer-events-auto" +
                " hover:text-rust " +
                transitionEaseLinearDuration300
              }
              initial="initial"
              whileHover="hover"
              aria-label="Menu"
            >
              <a
                className={
                  "font-planar hover:text-rust pointer-events-auto flex flex-row"
                }
                href={
                  index === 1
                    ? isAuth
                      ? "/logout"
                      : navItemLinksMobile[index].link
                    : navItemLinksMobile[index].link
                }
                target={navItemLinksMobile[index].target}
              >
                {index === 1 ? (isAuth ? "Log out" : navItem) : navItem}
                {index !== 1 ? <ExpressiveArrow size={"size-10"} /> : <></>}
              </a>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  ) : (
    <></>
  );
};
