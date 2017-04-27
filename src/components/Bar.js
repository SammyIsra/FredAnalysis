import React from 'react';

import '../style/Bar.css';

class Bar extends React.Component {

    render(){

        const {score, tone, className} = this.props;

        const colorDict = {
            anger: '#ff0000',
            disgust: '#6600cc',
            fear: '#33cc33',
            joy: '#e6e600',
            sadness: '#4da6ff'
        }

        const barStyle = {
            width: score*100 + '%',
            backgroundColor: colorDict[tone] || '#000099'
        }

        //remember, className is received from props
        return (
            <div className={`Bar ${className}`} > 
                <div className="bar-loaded" style={barStyle} />
            </div>
        );
    }
}

export default Bar;