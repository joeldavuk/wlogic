export const parsePrice = (str: string): number => {
  const regex = /(\d+(\.\d{1,2})?)/g;
  const match = str.match(regex);
  if (match) {
    return parseFloat(match[0]);
  } else {
    return 0;
  }
};
