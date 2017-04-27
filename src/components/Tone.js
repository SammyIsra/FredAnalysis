import React from 'react';

import Bar from './Bar.js';
import EmojiBar from './EmojiBar.js';

function Tone({tone, useEmoji}){

    let loadingBar;

    if(useEmoji) {
        loadingBar = (<EmojiBar className="twelve columns" 
                    tone={tone.tone_id} 
                    score={tone.score} />);
    } else {
        loadingBar = (<Bar className="twelve columns" 
                    tone={tone.tone_id} 
                    score={tone.score} />)
    }

    return (
        <td className="Tone row">
            <div>
                <div className="three columns name">
                    {tone.tone_name}
                </div>
                <div className="twelve columns label">
                    {`${(tone.score*100).toFixed(2)}%`}
                </div>
                {loadingBar}
            </div>
        </td>
    )
}

export default Tone;