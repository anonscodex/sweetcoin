export const formatNumber = (number) => {
    if (number >= 1000000000) {
        return `${(number / 1000000000).toFixed(1)}B`;
      } else if (number >= 1000000) {
        return `${(number / 1000000).toFixed(1)}M`;
      } else {
        return new Intl.NumberFormat('en-US').format(number);
      }
  };