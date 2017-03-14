import React from 'react';
import SearchFilter from './search-filter';
import FlightList from './flight-list';

const App = () => (
  <div className="app-container">
    <div className="header">
      <h1>Flight Search Engine</h1>
    </div>
    <div className="content">
      <div className="row">
        <div className="col-3">
          <SearchFilter />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-12">
              <FlightList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
