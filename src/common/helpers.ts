const getElementFromArrayByElementKey = <T>(
  arr: Array<T>,
  key: keyof T,
  keyValue: string | undefined | null | number | bigint
): T | undefined => {
  return arr.find((element) => element[key] === keyValue);
};

export { getElementFromArrayByElementKey };
