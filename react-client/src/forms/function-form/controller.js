import FunctionEnum from 'enums/function';

export default {
  defaultValues() {
    return {
      number: 3,
      base: 2,
      exponent: 5,
      functionCode: FunctionEnum.POWER.code
    }
  },
};