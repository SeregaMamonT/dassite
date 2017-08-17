export const submit = (form, result) => {
  return {
    type: "HANDLE_RESPONSE",
    value: { form, result }
  };
};

export const changeFunc = (func) => {
  return {
    type: "CHANGE_FUNCTION",
    value: func
  }
};