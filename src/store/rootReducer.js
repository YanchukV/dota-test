import { combineReducers } from 'redux';
import { heroesReducer} from '../app/components/Heroes/reducer';


export const rootReducer = combineReducers({
  heroesReducer,
});
