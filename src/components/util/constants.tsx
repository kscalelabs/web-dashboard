import ROUTES from "@/lib/types/routes";

export const transitionEaseLinearDuration300: string =
  " transition ease-linear duration-300 ";

export const navItems: string[] = ["Docs", "Robots Hub", "Account", "Login"];
export const navItemLinks: { link: string }[] = [
  { link: "https://docs.kscale.dev" },
  { link: ROUTES.BOTS.BROWSE.path },
  { link: ROUTES.ACCOUNT.path },
  { link: "/login" },
];

export const navItemsMobile: string[] = ["Docs", "Robots Hub", "Account", "Login"];
export const navItemLinksMobile: { link: string; }[] = [
  { link: "https://docs.kscale.dev"},
  { link: ROUTES.BOTS.BROWSE.path },
  { link: ROUTES.ACCOUNT.path },
  { link: "/login" },
];

export enum IconMode {
  FULL,
  SET,
}

export enum Size {
  THIN,
  NORMAL,
}

export enum ColorVariant {
  FILAMENT,
  CARBON,
  METHYL,
  PLASMA,
  OXIDE,
  RUST,
  MOLTEN,
  SOL,
}

export enum FillMode {
  DEFAULT,
  FILL,
  INVERT,
  STROKE,
}

export const CursorTypes = {
  DEFAULT: "default",
  POINTER: "pointer",
  PROGRESS: "progress",
  WAIT: "wait",
  TEXT: "text",
  ALIAS: "alias",
  NOT_ALLOWED: "not-allowed",
  E_RESIZE: "e-resize",
  NE_RESIZE: "ne-resize",
  NW_RESIZE: "nw-resize",
  S_RESIZE: "s-resize",
  SE_RESIZE: "se-resize",
  SW_RESIZE: "sw-resize",
  W_RESIZE: "w-resize",
  N_RESIZE: "n-resize",
  GRAB: "grab",
  GRABBING: "grabbing",
};
