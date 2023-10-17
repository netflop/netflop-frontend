import { ActionTypes, type Action } from './action';

export type State = {
  loading: boolean;
  number: number | null;
};

const initialState: State = {
  loading: false,
  number: null
};

export const reducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionTypes.START:
      return {
        ...state,
        number: action.payload.number
      };
    case ActionTypes.START_ASYNC:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.SUCCESS_ASYNC:
      return {
        ...state,
        loading: false,
        number: action.payload.number
      };
    case ActionTypes.ERROR_ASYNC:
    case ActionTypes.FINISH_ASYNC:
      return {
        ...state
      };
    default:
      return state;
  }
};
