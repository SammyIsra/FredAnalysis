import {combineReducers} from 'redux';
import selectedSentimentReducer from './selected_sentiment';
import sentimentListReducer from './sentiment_list';

const rootReducer = combineReducers({
    selectedSentiment: selectedSentimentReducer,
    sentimentList: sentimentListReducer
});

export default rootReducer;