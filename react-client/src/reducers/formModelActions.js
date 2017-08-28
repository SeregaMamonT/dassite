export const ActionType = {
  HANDLE_RESPONSE: 'FunctionForm.HANDLE_RESPONSE',
  CHANGE_VALUES: 'FunctionForm.CHANGE_VALUES'
};

export const handleResult = (form, result) => {
  return {
    type: ActionType.HANDLE_RESPONSE,
    value: { form, result }
  };
};

export const changeValues = (newValues) => {
  return {
    type: ActionType.CHANGE_VALUES,
    newValues
  }
};