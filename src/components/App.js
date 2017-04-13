import React from 'react';
import {BrowserRouter as Router, 
        Route} from 'react-router-dom';

import Report from './Report';

import '../style/App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <h1>Fred Report Analysis</h1>
          <Route exact path="/report/:id" component={Report} />
          <p>Bug somewhere? Make sure to tell Sammy!</p>
        </div>
      </Router>
    );
  }
}

export default App;