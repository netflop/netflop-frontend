export const ActionTypes = {
  START: 'EXAMPLE_SAGA/START',
  START_ASYNC: 'EXAMPLE_SAGA/START_ASYNC',
  SUCCESS_ASYNC: 'EXAMPLE_SAGA/SUCCESS_ASYNC',
  ERROR_ASYNC: 'EXAMPLE_SAGA/ERROR_ASYNC',
  FINISH_ASYNC: 'EXAMPLE_SAGA/FINISH_ASYNC'
};

// payload types
type StartPayload = {
  number: number;
};
type StartAsyncPayload = {
  range: number;
};
type SuccessAsyncPayload = {
  number: number;
};

// actions
const start = (payload: StartPayload) => ({
  type: ActionTypes.START,
  payload
});
const startAsync = (payload: StartAsyncPayload) => ({
  type: ActionTypes.START_ASYNC,
  payload
});
const successAsync = (payload: SuccessAsyncPayload) => ({
  type: ActionTypes.SUCCESS_ASYNC,
  payload
});
const errorAsync = () => ({
  type: ActionTypes.ERROR_ASYNC
});
const finishAsync = () => ({
  type: ActionTypes.FINISH_ASYNC
});

export const actions = {
  start,
  startAsync,
  successAsync,
  errorAsync,
  finishAsync
};

// action types
type Start = ReturnType<typeof start>;
type StartAsync = ReturnType<typeof startAsync>;
type SuccessAsync = ReturnType<typeof successAsync>;
type ErrorAsync = ReturnType<typeof errorAsync>;
type FinishAsync = ReturnType<typeof finishAsync>;

export type Action =
  & Start
  & StartAsync
  & SuccessAsync
  & ErrorAsync
  & FinishAsync;

Object.freeze(ActionTypes);
