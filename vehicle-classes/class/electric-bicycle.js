const Bicycle = require("./bicycle");

class ElectricBicycle extends Bicycle {
  constructor(modelName, year, price, style, frameSize, tireSize) {
    super(modelName, year, price, style, frameSize, tireSize);
  }
}
