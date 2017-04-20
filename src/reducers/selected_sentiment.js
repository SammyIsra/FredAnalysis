import {
    FETCHED_SENTIMENT,
    FETCH_FAILED,
} from '../actions/types';

export default function(state = {}, action){

    switch (action.type){
        case FETCHED_SENTIMENT:
            return {
                report: action.payload.analysis,
                text: action.payload.text,
                hasSentiment: true
            };
        case FETCH_FAILED:
            return {
                failed: true,
                hasSentiment: false
            };
        default:
            return {
                hasSentiment: false
            };
    }
}