import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },

  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },

  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },

  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () => {
  dataset.forEach(doThing);
});

// value = object which equates to the x, method and y variables.
function doThing(infoObject) {
  it(`solve for ${infoObject.x} ${infoObject.method} ${infoObject.y}`, () => {
    let myresult;
    let calculatedresult;
    switch (infoObject.method) {
      case "add":
        myresult = infoObject.x + infoObject.y;
        calculatedresult = calculator.add(infoObject.x, infoObject.y);
        break;
      case "subtract":
        myresult = infoObject.x - infoObject.y;
        calculatedresult = calculator.subtract(infoObject.x, infoObject.y);
        break;
      case "multiply":
        myresult = infoObject.x * infoObject.y;
        calculatedresult = calculator.multiply(infoObject.x, infoObject.y);
        break;
      case "divide":
        myresult = infoObject.x / infoObject.y;
        calculatedresult = calculator.divide(infoObject.x, infoObject.y);
        break;
    }
    expect(myresult).toBe(calculatedresult);
  });
}
