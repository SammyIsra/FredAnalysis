import {FETCHED_ALL_SENTIMENTS} from '../actions/types';

export default function(state={}, action){
    switch (action.type){
        case FETCHED_ALL_SENTIMENTS:
            return {
                reportList: action.payload,
                hasList: true
            }
        default:
            return {
                hasList: false
            };
    }
}