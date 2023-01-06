export const currencyFormatter = (price) => {
  if (!price) return null;
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}