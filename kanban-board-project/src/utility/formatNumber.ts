function formatNumber(num: number): string {
  if (num === 0) return "0 stars";
  if (num === 1) return "1 star";
  if (num < 1000) return `${num} stars`;

  const units = ["", "K"];
  let unitIndex = Math.floor(Math.log10(num) / 3);

  let shortNumber = num / Math.pow(10, unitIndex * 3);
  shortNumber = Math.ceil(shortNumber * 10) / 10;

  return `${shortNumber}${units[unitIndex]} stars`;
}

export default formatNumber;
