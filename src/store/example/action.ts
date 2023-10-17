export const ActionTypes = {
  EXAMPLE_START: 'EXAMPLE/START',
  EXAMPLE_START_ASYNC: 'EXAMPLE/START_ASYNC',
  EXAMPLE_SUCCESS_ASYNC: 'EXAMPLE/SUCCESS_ASYNC',
  EXAMPLE_ERROR_ASYNC: 'EXAMPLE/ERROR_ASYNC',
  EXAMPLE_FINISH_ASYNC: 'EXAMPLE/FINISH_ASYNC'
};

// payload types
type StartPayload = {
  number: number;
};
type ExampleStartAsyncePayload = {
  range: number;
};
type ExampleSuccessAsyncPayload = {
  number: number;
};

// actions
const exampleStart = (payload: StartPayload) => ({
  type: ActionTypes.EXAMPLE_START,
  payload
});
const exampleStartAsync = (payload: ExampleStartAsyncePayload) => ({
  type: ActionTypes.EXAMPLE_START_ASYNC,
  payload
});
const exampleSuccessAsync = (payload: ExampleSuccessAsyncPayload) => ({
  type: ActionTypes.EXAMPLE_SUCCESS_ASYNC,
  payload
});
const exampleErrorAsync = () => ({
  type: ActionTypes.EXAMPLE_ERROR_ASYNC
});
const exampleFinishAsync = () => ({
  type: ActionTypes.EXAMPLE_FINISH_ASYNC
});

export const actions = {
  exampleStart,
  exampleStartAsync,
  exampleSuccessAsync,
  exampleErrorAsync,
  exampleFinishAsync
};

// action types
type ExampleStart = ReturnType<typeof exampleStart>;
type ExampleStartAsync = ReturnType<typeof exampleStartAsync>;
type ExampleSuccessAsync = ReturnType<typeof exampleSuccessAsync>;
type ExampleErrorAsync = ReturnType<typeof exampleErrorAsync>;
type ExampleFinishAsync = ReturnType<typeof exampleFinishAsync>;

export type Action = ExampleStart &
  ExampleStartAsync &
  ExampleSuccessAsync &
  ExampleErrorAsync &
  ExampleFinishAsync;

Object.freeze(ActionTypes);
