import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../actions';

import '../style/ReportList.css';

class ReportList extends React.Component {
    
    componentDidMount(){
        this.props.fetchAllShortSentiments();
    }

    

    listOfReports(){

        function truncateText(text){
            if(text.length <= 250)
                return text;
            else
                return text.slice(0,247)+"...";
        }

        console.log(this.props.reports);

        if(this.props.reports.hasList){
            return this.props.reports.reportList.map(function(item){
                return (
                    <li key={item._id} className="ReportListItem">
                        <Link to={`/report/${item._id}`}>{truncateText(item.text)}</Link>
                    </li>
                );
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
