import React from 'react';

function Tone({tone}){
    return (
        <td className="Tone row">
            <div className="three columns">
                {tone.tone_name}
            </div>
            <div className="twelve columns">
                {`${tone.score*100}%`}
            </div>
        </td>
    )
}

export default Tone;