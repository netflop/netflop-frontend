import { combineReducers } from 'redux';
import { reducer as exampleSagaReducer } from './example-saga';
import { slice as exampleThunkSlice } from './example-thunk';

const rootReducer = combineReducers({
  exampleSaga: exampleSagaReducer.reducer,
  exampleThunk: exampleThunkSlice.reducer
});

export default rootReducer;
