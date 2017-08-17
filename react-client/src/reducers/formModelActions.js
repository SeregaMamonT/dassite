export const ActionType = {
  HANDLE_RESPONSE: 'FunctionForm.HANDLE_RESPONSE',
  CHANGE_FUNCTION: 'FunctionForm.CHANGE_FUNCTION'
};

export const handleResult = (form, result) => {
  return {
    type: ActionType.HANDLE_RESPONSE,
    value: { form, result }
  };
};

export const changeFunction = (func) => {
  return {
    type: ActionType.CHANGE_FUNCTION,
    value: func
  }
};