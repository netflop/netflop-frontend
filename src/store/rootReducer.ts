import { combineReducers } from 'redux';
import { exampleSaga } from './sagas';
import { exampleThunk } from './slices';
import { darkMode } from './sagas';

const rootReducer = combineReducers({
  exampleSaga: exampleSaga.reducer,
  exampleThunk: exampleThunk.exampleThunkReducer,
  darkMode: darkMode.reducer
});

export default rootReducer;
