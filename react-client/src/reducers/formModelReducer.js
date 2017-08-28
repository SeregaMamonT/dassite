import { ActionType } from './formModelActions';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionType.HANDLE_RESPONSE:
      const { form, result } = action.value;
      return {
        ...form,
        result: result
      };

    case ActionType.CHANGE_VALUES:
      return {
        ...state,
        ...action.newValues,
      };

    default:
      return state;
  }
};