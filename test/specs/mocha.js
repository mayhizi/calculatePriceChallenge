import { getRebateSpec } from "./getRebate.spec.js";
import { priceCalculatorSpec } from "./priceCalculator.spec.js";

mocha.setup("bdd");
getRebateSpec();
priceCalculatorSpec();
mocha.run();
