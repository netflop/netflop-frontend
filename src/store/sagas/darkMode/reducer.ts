import { ActionTypes, type Action } from './action';

export type State = {
  isDarkMode: boolean
};

const initialState: State = {
  isDarkMode: false
};

export const reducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionTypes.TOGGLE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      };
    case ActionTypes.SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload.isDarkMode
      };
    default:
      return state;
  }
};
