import {combineReducers} from 'redux';
import sentimentReducer from './sentiment';

const rootReducer = combineReducers({
    sentiment: sentimentReducer
});

export default rootReducer;