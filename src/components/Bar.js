import React from 'react';

import '../style/Bar.css';

class Bar extends React.Component {

    render(){

        const colorDict = {
            anger: '#ff0000',
            disgust: '#6600cc',
            fear: '#33cc33',
            joy: '#e6e600',
            sadness: '#4da6ff'
        }

        const barStyle = {
            width: this.props.score*100 + '%',
            backgroundColor: colorDict[this.props.tone] || '#000099'
        }
        return (
            <div className={`Bar ${this.props.className}`} >
                <div className="bar-loaded" style={barStyle} />
            </div>
        );
    }
}

export default Bar;