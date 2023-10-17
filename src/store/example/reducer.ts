import { ActionTypes, type Action } from './action';

export type ExampleState = {
  loading: boolean;
  number: number | null;
};

const initialState: ExampleState = {
  loading: false,
  number: null
};

export const reducer = (
  state: ExampleState = initialState,
  action: Action
): ExampleState => {
  switch (action.type) {
    case ActionTypes.EXAMPLE_START:
      return {
        ...state,
        number: action.payload.number
      };
    case ActionTypes.EXAMPLE_START_ASYNC:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.EXAMPLE_SUCCESS_ASYNC:
      return {
        ...state,
        loading: false,
        number: action.payload.number
      };
    case ActionTypes.EXAMPLE_ERROR_ASYNC:
    case ActionTypes.EXAMPLE_FINISH_ASYNC:
      return {
        ...state
      };
    default:
      return state;
  }
};
