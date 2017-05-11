import React from 'react';

class EmojiBar extends React.Component {

    render(){

        //Extract wanted values
        const {score, tone, className} = this.props;

        //Get the 'efective' score
        const efectiveScore = Math.round(100*score);

        //Declare the emoji dictionary 
        const emojiDict = {
            joy: '😂',
            anger: '😡',
            disgust: '🤢',
            fear: '😱',
            sadness: '😢'
        }

        //Fill the loaded bar
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