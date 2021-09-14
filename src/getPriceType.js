import { getRebate } from "./getRebate.js";


export const getPriceType = (
  userType,
  productType,
  price,
  publishedDate,
  additionalPrice
) => {
  const rebate = getRebate(productType, userType, publishedDate);
  return price + additionalPrice - rebate;
};
