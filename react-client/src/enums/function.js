const FunctionEnum = {
  SQUARE: value("square", "Square"),
  POWER: value("power", "Power")
};

function value(code, description) {
  return { code, description };
}

export default FunctionEnum;