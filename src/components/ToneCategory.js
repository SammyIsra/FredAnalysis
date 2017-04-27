import React from 'react';

import Tone from './Tone';

class ToneCategory extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            useEmoji: false
        }
    }

    hanldeUseEmoji(ev){
        this.setState({
            useEmoji: !this.state.useEmoji
        })
    }

    listOfTones(){

        const useEmoji = ((this.props.category.category_id === "emotion_tone")? true : false) && this.state.useEmoji;

        return this.props.category.tones.map(function(item){
            return <tr key={item.tone_id}><Tone tone={item} useEmoji={useEmoji} /></tr>;
        });
    }

    render(){

        const {category} = this.props;

        console.log("Using emoji? " + this.state.useEmoji);
        
        

        return (
            <table className="Category u-full-width">
                <thead>
                    <tr>
                        <th onClick={this.hanldeUseEmoji.bind(this)} ><h4>{category.category_name}</h4></th>
                    </tr>
                </thead>
                <tbody>
                    {this.listOfTones()}
                </tbody>
            </table>
        );
    }
    
    
}

export default ToneCategory;