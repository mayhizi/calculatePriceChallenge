import { getRebate } from "../../src/getRebate.js";

export const getRebateSpec = () => {
  describe("rebate calculator", function () {
    it("should calc rebate right", function () {
      const userType = 0;
      const productType = 0;
      const publishedDate = new Date();

      const expected = 10;
      const actual = getRebate(productType, userType, publishedDate);
      expect(expected).to.equal(actual);
    });
  });
};

