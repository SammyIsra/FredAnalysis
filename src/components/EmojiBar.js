import React from 'react';

class EmojiBar extends React.Component {

    render(){

        const {score, tone, className} = this.props;

        console.log(this.props);

        const efectiveScore = Math.round(100*score);

        const emojiDict = {
            joy: '😂',
            anger: '😡',
            disgust: '🤢',
            fear: '😱',
            sadness: '😢'
        }

        let loadedBar = "";
        for(var i = 0 ; i < efectiveScore ; i++){
            loadedBar += emojiDict[tone];
            console.log(emojiDict[tone]);
        }
            

        //remember, className is received from props
        return (
            <div className={`EmojiBar ${className} ${tone}`} > 
                <div className="bar-loaded">{loadedBar}</div>
            </div>
        );
    }
}

export default EmojiBar;