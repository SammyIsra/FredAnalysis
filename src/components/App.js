import React from 'react';
import {BrowserRouter as Router, 
        Route} from 'react-router-dom';

import Report from './Report';
import ReportList from './ReportList';

import '../style/App.css';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <h1>Fred Report Analysis</h1>
          <Route exact path="/report/:id" component={Report} />
          <Route exact path="/" component={ReportList} />
          <p className="label">Bug somewhere? Better call Sammy!</p>
        </div>
      </Router>
    );
  }
}

export default App;