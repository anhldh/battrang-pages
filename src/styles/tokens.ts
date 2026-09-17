export const colors = {
  bg: "#e9dfcd",
  surface: "#f5eddf",
  surfaceAlt: "#f0e6d5",
  text: "#2b211a",
  textMuted: "rgba(43,33,26,.6)",
  textFaint: "rgba(43,33,26,.5)",
  divider: "rgba(90,58,38,.2)",
  dividerStrong: "rgba(90,58,38,.3)",
  blue: "#2c4a76",
  red: "#a8342a",
  brown: "#8a5030",
  green: "#4f7f70",
  olive: "#5b6b4a",
} as const;

export const font = {
  heading: '"Cormorant Garamond", Georgia, serif',
  body: '"Lora", Georgia, serif',
} as const;

export const radius = {
  sm: "2px",
  md: "4px",
  lg: "7px",
} as const;

/** Dưới ngưỡng này sidebar thu về header có menu mở. */
export const MOBILE_BREAKPOINT = 900;
export const mq = {
  mobile: `@media (max-width: ${MOBILE_BREAKPOINT}px)`,
  desktop: `@media (min-width: ${MOBILE_BREAKPOINT + 1}px)`,
} as const;

/** Ảnh tạm — thay link thật sau. */
export const IMG = {
  item: "/avatar.jpg",
  background: "/bg.png",
} as const;
