import {calculatePrice} from "../../src/priceCalculator.js";

export const priceCalculatorSpec = () => {
  describe("price calculator", function () {
    it("should calc price right", function () {
      const userType = 0;
      const productType = 0;
      const price = 1;
      const publishedDate = new Date();

      const expected = 16;
      const actual = calculatePrice(
        userType,
        productType,
        price,
        publishedDate
      );
      expect(expected).to.equal(actual);
    });
  });
};

