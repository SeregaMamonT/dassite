export default (state = {}, action) => {
  switch (action.type) {
    case 'HANDLE_RESPONSE':
      const value = action.value;
      return {
        ...value.form,
        resultValue: value.result
      };
    default:
      return state;
  }
};