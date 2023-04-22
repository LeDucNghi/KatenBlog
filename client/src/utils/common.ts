export const breakpoints = (breakpoint: number) => {
  if (breakpoint <= 320) {
    return "mobile";
  }
  if (breakpoint >= 768 && breakpoint < 1024) {
    return "tablet";
  }
  if (breakpoint >= 1024) {
    return "pc";
  }
};
