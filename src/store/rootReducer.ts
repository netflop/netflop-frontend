import { combineReducers } from 'redux';
import { exampleSaga } from './sagas';
import { exampleThunk } from './slices';

const rootReducer = combineReducers({
  exampleSaga: exampleSaga.reducer,
  exampleThunk: exampleThunk.exampleThunkReducer
});

export default rootReducer;
