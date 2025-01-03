import { ExpressiveArrow } from "@/components/ui/iconography/Iconography";
import {
  navItemLinksMobile,
  navItemsMobile,
  transitionEaseLinearDuration300,
} from "@/components/util/constants";
import ROUTES from "@/lib/types/routes";
import { motion } from "motion/react";

const isSignupPage = location.pathname === ROUTES.SIGNUP.path;
export const BurgerMenu = (isOpen: boolean, isAuthenticated: boolean) => {
  return isOpen ? (
    <div className={"grid-m"}>
      <motion.div
        className={
          "flex flex-col col-span-full list-none justify-evenly h-[100dvh] z-[150]"
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "circOut" }}
      >
        {navItemsMobile.map((navItem, index) => {
          function getHref(index: number) {
            if (index === 2) {
              return isAuthenticated
                ? ROUTES.ACCOUNT.path
                : isSignupPage
                  ? ROUTES.SIGNUP.path
                  : ROUTES.LOGIN.path;
            }

            if (index === 3) {
              return isAuthenticated
                ? ROUTES.LOGOUT.path
                : isSignupPage
                  ? ROUTES.SIGNUP.path
                  : ROUTES.LOGIN.path;
            }
            return navItemLinksMobile[index].link;
          }
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
                href={getHref(index)}
                target={index === 0 ? "_blank" : "_self"}
                rel="noreferrer"
              >
                {index === 3
                  ? isAuthenticated
                    ? "Log out"
                    : isSignupPage
                      ? "Sign Up"
                      : "Log In"
                  : navItem}
                {index === 0 ? <ExpressiveArrow size={"size-10"} /> : <></>}
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
