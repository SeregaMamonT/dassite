export const ActionType = {
  HANDLE_RESPONSE: 'Form.HANDLE_RESPONSE',
  CHANGE_VALUES: 'Form.CHANGE_VALUES'
};

export const changeValues = (newValues) => {
  return {
    type: ActionType.CHANGE_VALUES,
    newValues
  }
};