export const fetchRandomObject = (arr: []) => {
  const randomObject = arr[Math.floor(Math.random() * arr.length)];

  return randomObject;
};

export const elementRef = (ref: React.RefObject<HTMLDivElement>) => {
  return ref;
};

export const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  window.scrollTo({
    top: ref.current?.offsetTop,
    behavior: "smooth",
  });
};
