import { combineReducers } from 'redux';
import { reducer as exampleReducer } from './example'

const rootReducer = combineReducers({
    example: exampleReducer.reducer
});

export default rootReducer;
