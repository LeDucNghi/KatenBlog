export const fetchRandomObject = (arr : []) => {
  const randomObject = arr[Math.floor(Math.random() * arr.length)]

  return randomObject
}