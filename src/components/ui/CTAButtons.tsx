import { motion } from "motion/react";
import clsx from "clsx";
import { ColorVariant, FillMode } from "@/components/util/constants";
import { Size } from "@/components/util/constants";
import routes from "@/lib/types/routes";

const SHOP_URL = "https://shop.kscale.dev/collections/all";

const getVariantClass = (variant: ColorVariant, mode: FillMode): string => {
  if (mode === FillMode.FILL) {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-methyl text-filament";
      case ColorVariant.PLASMA:
        return "bg-plasma text-filament";
      case ColorVariant.OXIDE:
        return "bg-oxide text-filament";
      case ColorVariant.RUST:
        return "bg-rust text-filament";
      case ColorVariant.MOLTEN:
        return "bg-molten text-filament";
      case ColorVariant.SOL:
        return "bg-sol text-filament";
      case ColorVariant.FILAMENT:
        return "bg-filament text-carbon";
      case ColorVariant.CARBON:
        return "bg-carbon text-filament";
      default:
        return "bg-carbon text-filament";
    }
  } else if (mode === FillMode.INVERT) {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-filament text-methyl";
      case ColorVariant.PLASMA:
        return "bg-filament text-plasma";
      case ColorVariant.OXIDE:
        return "bg-filament text-oxide";
      case ColorVariant.RUST:
        return "bg-filament text-rust";
      case ColorVariant.MOLTEN:
        return "bg-filament text-molten";
      case ColorVariant.SOL:
        return "bg-filament text-sol";
      case ColorVariant.FILAMENT:
        return "bg-carbon text-filament";
      case ColorVariant.CARBON:
        return "bg-filament text-carbon";
      default:
        return "bg-filament text-carbon";
    }
  } else if (mode === FillMode.STROKE) {
    switch (variant) {
      case ColorVariant.METHYL:
        return "border border-methyl text-methyl";
      case ColorVariant.PLASMA:
        return "border border-plasma text-plasma";
      case ColorVariant.OXIDE:
        return "border border-oxide text-oxide";
      case ColorVariant.RUST:
        return "border border-rust text-rust";
      case ColorVariant.MOLTEN:
        return "border border-molten text-molten";
      case ColorVariant.SOL:
        return "border border-sol text-sol";
      case ColorVariant.FILAMENT:
        return "border border-filament text-filament";
      case ColorVariant.CARBON:
        return "border border-carbon text-carbon";
      default:
        return "border border-foregrounds text-foreground";
    }
  } else {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-methyl dark:bg-filament text-filament dark:text-methyl";
      case ColorVariant.PLASMA:
        return "bg-plasma dark:bg-filament text-filament dark:text-plasma";
      case ColorVariant.OXIDE:
        return "bg-oxide dark:bg-filament text-filament dark:text-oxide";
      case ColorVariant.RUST:
        return "bg-rust dark:bg-filament text-filament dark:text-rust";
      case ColorVariant.MOLTEN:
        return "bg-molten dark:bg-filament text-filament  dark:text-molten";
      case ColorVariant.SOL:
        return "bg-sol dark:bg-filament text-filament dark:text-sol";
      case ColorVariant.FILAMENT:
        return "bg-filament text-carbon dark:bg-filament dark:text-carbon";
      case ColorVariant.CARBON:
        return "bg-carbon text-filament dark:bg-filament dark:text-carbon";
      default:
        return "bg-carbon dark:bg-filament text-filament dark:text-carbon";
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
    opacity: 0.8,
  },
};

export const NavCTAButton = ({
  children,
  href = SHOP_URL,
  className,
  variant = ColorVariant.RUST,
  mode = FillMode.DEFAULT,
  size = Size.THIN,
  target = "_self",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: ColorVariant;
  mode?: FillMode;
  size?: Size;
  target?: string;
}) => {

  return target === "_blank" ? (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body select-none rounded pointer pointer-events-auto z-20",
        getVariantClass(variant, mode),
        className
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
    >
      <a
        href={href}
        target={target}
        className={clsx(
          "flex flex-row gap-1 justify-center items-center px-2 pointer select-none pointer-events-auto",
          size === Size.THIN ? "py-1" : "py-2"
        )}
      >
        {children}
      </a>
    </motion.button>
  ) : (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body px-2 select-none flex flex-row gap-1 justify-center items-center pointer pointer-events-auto z-20",
        size === Size.THIN ? "py-1" : "py-2",
        "cursor-pointer select-none",
        "rounded",
        getVariantClass(variant, mode),
        className
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
      onClick={() => routes.BOTS}
    >
      {children}
    </motion.button>
  );
};