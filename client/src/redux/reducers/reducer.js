import { combineReducers } from 'redux'
import gridReducer from './grid'

const rootReducer = combineReducers({
  grid: gridReducer,
});

export default rootReducer