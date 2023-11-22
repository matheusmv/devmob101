export const prettyPrice = (price: number, fmt: Intl.LocalesArgument): string => {
  return price.toLocaleString(fmt, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
