import { calculatePrice } from "./priceCalculator.js";

let calculatedPrice = 0;
const userType = 1;
const productType = 0;
const price = 100;
const publishedDate = new Date();

calculatedPrice = calculatePrice(userType, productType, price, publishedDate);

console.log("Calculated price:", calculatedPrice);


