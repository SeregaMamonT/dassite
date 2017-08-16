export default (state = {}, action) => {
  switch (action.type) {
    case 'HANDLE_RESPONSE':
      return {
        ...state,
        resultValue: action.value
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