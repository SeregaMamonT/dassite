import { ActionType } from './formModelActions';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionType.HANDLE_RESPONSE:
      const { form, result } = action.value;
      return {
        ...form,
        result: result
      };

    case ActionType.CHANGE_FUNCTION:
      return {
        ...state,
        functionSelector: action.value,
        result: undefined
      };

    default:
      return state;
  }
};