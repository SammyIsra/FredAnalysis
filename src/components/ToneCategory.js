import React from 'react';

import Tone from './Tone';

function ToneCategory({category}){
    
    const tones = category.tones.map(function(item){
        return <tr key={item.tone_id}><Tone tone={item} /></tr>;
    });

    return (
        <table className="Category u-full-width">
            <thead>
                <tr>
                    <th><h4>{category.category_name}</h4></th>
                </tr>
            </thead>
            <tbody>
                {tones}
            </tbody>
        </table>
    );
}

export default ToneCategory;