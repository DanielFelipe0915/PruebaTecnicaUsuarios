type currency = "USD" | "COP";

export const formatPrice = (amount: number, currency: currency = "USD") => {
  const options = { currency: currency, minimumFractionDigits: 0, maximunFractionDigits: 0 };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  return numberFormat.format(amount);
};
