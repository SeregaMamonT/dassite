export const submit = (result) => {
  return {
    type: "HANDLE_RESPONSE",
    value: result
  };
};

export const changeFunc = (func) => {
  return {
    type: "CHANGE_FUNCTION",
    value: func
  }
};