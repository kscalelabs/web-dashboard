import React, { useEffect, useState } from "react";

import Logotype from "@/components/logotypes/logotype";
import BurgerMenu from "@/components/navbar/burgerMenu";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { NavDocsButton, NavLogInButton } from "@/components/navbar/navButtons";
import { NavCTAButton } from "@/components/ui/CTAButtons";
import { FillMode } from "@/components/util/constants";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [, setDesktopNavHidden] = useState(false);
  const [desktopPreviousScroll, setPrevScroll] = useState(scrollY.get());
  const [mobileShouldOpenBurger, setMobileShouldOpenBurger] = useState(false);

  function update(current: number, previous: number): void {
    if (current < previous) {
      setDesktopNavHidden(false);
    } else if (current > 100 && current > previous) {
      setDesktopNavHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (current: number) => {
    update(current, desktopPreviousScroll);
    setPrevScroll(current);
  });
  const width = useWindowSize().width;

  const navBasedOnWidth = (isDesktop: boolean) => {
    return isDesktop ? desktopNavBar() : mobileNavBar();
  };

  const atTop = scrollY.get() < 100;

  const mobileNavBar = () => {
    return (
      <>
        <menu
          className={clsx(
            "col-span-full grid grid-cols-subgrid overflow-hidden py-4 items-end h-fit px-[5vw] -mx-[5vw]",
          )}>
          <Logotype  />
          <BurgerOpenButton
            className="-col-end-1 place-self-end pointer-events-auto"
            atTop={atTop}
            isOpen={mobileShouldOpenBurger}
            onClick={setMobileShouldOpenBurger}
          />
        </menu>
        <AnimatePresence>{BurgerMenu(mobileShouldOpenBurger)}</AnimatePresence>
      </>
    );
  };

  const desktopNavBar = () => {
    return (
      <>
        <Logotype  />
        <NavDocsButton  />
        <NavLogInButton  />

        <NavCTAButton
          className="md:col-span-2 md:-col-end-1 2xl:col-span-3 2xl:-col-end-1"
          mode={FillMode.FILL}
        >
          View all products
        </NavCTAButton>
      </>
    );
  };
  useEffect(() => {
    setMobileShouldOpenBurger(false);
  }, [width]);

  useEffect(() => {
    if (mobileShouldOpenBurger) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [mobileShouldOpenBurger]);

  return (
    <motion.nav className="fixed bg-background top-0 inset-x-0 z-50 md:h-auto md:py-4 grid-a grid-rows-[min-content_auto] pointer-events-none">
      {navBasedOnWidth(width >= 768)}
    </motion.nav>
  );
}
