import React from 'react';

import Bar from './Bar.js';

function Tone({tone}){
    return (
        <td className="Tone row">
            <div>
                <div className="three columns">
                    {tone.tone_name}
                </div>
                <div className="twelve columns">
                    {`${tone.score*100}%`}
                </div>
                <Bar className="twelve columns" 
                    tone={tone.tone_name} 
                    score={tone.score} />
            </div>
        </td>
    )
}

export default Tone;