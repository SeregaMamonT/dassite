export default (state = {}, action) => {
  switch (action.type) {
    case 'HANDLE_RESPONSE':
      const { form, result } = action.value;
      return {
        ...form,
        resultValue: result
      };
    case "CHANGE_FUNCTION":
      return {
        ...state,
        functionSelector: action.value
      };
    default:
      return state;
  }
};