import React from 'react';
import {connect} from 'react-redux';

import ToneCategory from './ToneCategory';

import * as actions from '../actions';

//Actual Component
function Report({report, text}){

    const categories = report.document_tone.tone_categories.map(function(category){
        return <ToneCategory key={category.category_id} category={category} />;
    })

    return (
        <div className="Report twelve columns">
            <p id="text-analyzed" className="quote">{text}</p>
            {categories}
        </div>
    );
}

//HOC for the report. Until the thing is loaded, show Loading
class ReportWrap extends React.Component {

    componentDidMount(){
        this.props.fetchSentimentsFromID(this.props.match.params.id);
    }

    renderReport(){
        if(this.props.sentiment.hasSentiment)
            return <Report report={this.props.sentiment.report} text={this.props.sentiment.text} />;
        else if(this.props.sentiment.failed)
            return "Failed!";
        else
            return "Loading...";
    }

    render(){
        console.log(this.props);
        return (
            <div>
                {this.renderReport()}
            </div>
        )
    }
}

function mapStateToProps(state){
  return {
    sentiment: state.selectedSentiment
  };
}


export default connect(mapStateToProps, actions)(ReportWrap)