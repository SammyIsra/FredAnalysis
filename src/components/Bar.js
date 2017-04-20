import React from 'react';

import '../style/Bar.css';

class Bar extends React.Component {

    render(){
        console.log(this.props);
        const barStyle = {
            width: this.props.score*100 + '%'
        }
        return (
            <div className={`Bar ${this.props.className}`} >
                <div className="bar-loaded" style={barStyle} />
            </div>
        );
    }
}

export default Bar;