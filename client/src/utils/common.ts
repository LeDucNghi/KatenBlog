export const breakpoints = (breakpoint: number) => {
  console.log("🚀 ~ file: common.ts:2 ~ breakpoints ~ breakpoint", breakpoint);
  if (breakpoint <= 320) {
    console.log("mobile");
    return "mobile";
  }
  if (breakpoint >= 768 || breakpoint < 1024) {
    console.log("tablet");
    return "tablet";
  }
  if (breakpoint >= 1024) {
    console.log("là pc");
    return "pc";
  }
};
