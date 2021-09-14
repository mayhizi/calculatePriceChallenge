import {
  NEW_PRODUCT,
  ADDITIONAL_PRICE_NEW_PRODUCT,
  ADDITIONAL_PRICE_OLD_PRODUCT,
} from "../config/constants.js";
import { getPriceType } from "./getPriceType.js";

export const calculatePrice = (userType, productType, price, publishedDate) => {
  const additionalPrice =
    productType === NEW_PRODUCT
      ? ADDITIONAL_PRICE_NEW_PRODUCT
      : ADDITIONAL_PRICE_OLD_PRODUCT;
  return getPriceType(
    userType,
    productType,
    price,
    publishedDate,
    additionalPrice
  );
};
