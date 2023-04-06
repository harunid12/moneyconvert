import Money from "./money.js";

let moneys = [
  new Money("usd", "idr", 14987),
  new Money("usd", "sgd", 1.33),
  new Money("usd", "jpy", 131.72),
  new Money("sgd", "idr", 11241),
  new Money("sgd", "usd", 0.75),
  new Money("sgd", "jpy", 99.01),
  new Money("idr", "usd", 0.000067),
  new Money("idr", "sgd", 0.000088),
  new Money("idr", "jpy", 0.0089),
  new Money("jpy", "idr", 112.62),
  new Money("jpy", "usd", 0.0076),
  new Money("jpy", "sgd", 0.01),
];

export default moneys;
