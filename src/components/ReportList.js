import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../actions';

class ReportList extends React.Component {
    
    componentDidMount(){
        this.props.fetchAllShortSentiments();
    }

    listOfReports(){

        console.log(this.props)

        if(this.props.reports.hasList){
            return this.props.reports.reportList.map(function(item){
                return <li key={item._id}><Link to={`/report/${item._id}`}>{item.text}</Link></li>;
            });
        } else {
            return <p>None yet!</p>;
        }
    }
    
    render(){

        return (
            <div className="ReportList">
                <h3>Report List</h3>
                <ul>
                    {this.listOfReports()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        reports: state.sentimentList
    }
}

export default connect(mapStateToProps, actions)(ReportList);
