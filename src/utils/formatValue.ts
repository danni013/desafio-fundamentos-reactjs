const formatValue = (value: number): string => {
  Intl.NumberFormat().format(value);
  return `${value},00`;
};
export default formatValue;
