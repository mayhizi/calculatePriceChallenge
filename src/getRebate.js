import {
  NORMAL_USER,
  NEW_PRODUCT,
  REBATE_NEW_PUBLISHED_PRODUCT,
  REBATE_COMPANY_USER,
  COMPANY_USER,
} from "../config/constants.js";

export const getRebate = (productType, userType, publishedDate) => {
  let enddateDiscount = 0;
  if (userType === NORMAL_USER && productType === NEW_PRODUCT) {
    if (publishedDate.toDateString() === new Date().toDateString())
      enddateDiscount = REBATE_NEW_PUBLISHED_PRODUCT;
  } else if (userType === COMPANY_USER) {
    if (
      publishedDate.toDateString() === new Date().toDateString() &&
      productType === NEW_PRODUCT
    ) {
      enddateDiscount = REBATE_NEW_PUBLISHED_PRODUCT + REBATE_COMPANY_USER;
    } else {
      enddateDiscount = REBATE_COMPANY_USER;
    }
  }
  return enddateDiscount;
};
