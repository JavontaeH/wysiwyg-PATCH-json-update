const colorClassArray = ["Yellow", "Blue"];
let colorCount = 0;
export const cycleBgColor = () => {
  const variant = colorClassArray[colorCount];
  colorCount < colorClassArray.length - 1 ? colorCount++ : (colorCount = 0);
  return variant;
};
