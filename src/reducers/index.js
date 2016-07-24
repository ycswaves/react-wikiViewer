import {combineReducers} from 'redux';
import wikiResult from './wiki'
import * as Types from '../actions/actionTypes'

function query(state = '', action){
  if (action.type == Types.UPDATE_QUERY) {
    return action.query
  };
  return state;
}

const rootReducer = combineReducers({
  wikiResult,
  query
});

export default rootReducer;



