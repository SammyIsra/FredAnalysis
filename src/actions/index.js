import axios from 'axios';

import {
    FETCHED_SENTIMENT,
    FETCH_FAILED,
    FETCHED_ALL_SENTIMENTS 
} from './types';

const defaultTone = {
    "document_tone": {
        "tone_categories": [
        {
            "tones": [
            {
                "score": 0.017129,
                "tone_id": "anger",
                "tone_name": "Anger"
            },
            {
                "score": 0.014819,
                "tone_id": "disgust",
                "tone_name": "Disgust"
            },
            {
                "score": 0.034951,
                "tone_id": "fear",
                "tone_name": "Fear"
            },
            {
                "score": 0.690693,
                "tone_id": "joy",
                "tone_name": "Joy"
            },
            {
                "score": 0.111761,
                "tone_id": "sadness",
                "tone_name": "Sadness"
            }
            ],
            "category_id": "emotion_tone",
            "category_name": "Emotion Tone"
        },
        {
            "tones": [
            {
                "score": 0.257985,
                "tone_id": "analytical",
                "tone_name": "Analytical"
            },
            {
                "score": 0,
                "tone_id": "confident",
                "tone_name": "Confident"
            },
            {
                "score": 0.60858,
                "tone_id": "tentative",
                "tone_name": "Tentative"
            }
            ],
            "category_id": "language_tone",
            "category_name": "Language Tone"
        },
        {
            "tones": [
            {
                "score": 0.598316,
                "tone_id": "openness_big5",
                "tone_name": "Openness"
            },
            {
                "score": 0.624863,
                "tone_id": "conscientiousness_big5",
                "tone_name": "Conscientiousness"
            },
            {
                "score": 0.783261,
                "tone_id": "extraversion_big5",
                "tone_name": "Extraversion"
            },
            {
                "score": 0.609295,
                "tone_id": "agreeableness_big5",
                "tone_name": "Agreeableness"
            },
            {
                "score": 0.25649,
                "tone_id": "emotional_range_big5",
                "tone_name": "Emotional Range"
            }
            ],
            "category_id": "social_tone",
            "category_name": "Social Tone"
        }
        ]
    }
} 

//Fetch one full report from server, given an id
export function fetchSentimentsFromID(sentimentID){
    //temporal: return a static sentiment analysis
    return function(dispatch){
        axios.get(`http://fred-analyze.us-east-1.elasticbeanstalk.com/api/sentiment/${sentimentID}`)
        .then(function(data){
            dispatch({
                type: FETCHED_SENTIMENT,
                payload: data.data
            })
        })
        .catch(function(data){
            dispatch({
                type: FETCH_FAILED,
                payload: defaultTone
            })
        })
    }
}

//Get a list of short reports (only gets id, text, date, and who analyzed)
export function fetchAllShortSentiments(){
    return function(dispatch){
        axios.get('http://fred-analyze.us-east-1.elasticbeanstalk.com/api/sentiment')
        .then(function(data){
            dispatch({
                type: FETCHED_ALL_SENTIMENTS,
                payload: data.data.reports
            });
        })
        .catch(function(data){
            dispatch({type: FETCH_FAILED,
            payload: defaultTone
            });
        });
    }
}