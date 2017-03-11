import React, { Component } from 'react';
import SearchFilter from './search-filter';
import FlightList from './flight-list';
import RouteHeader from './route_header';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
       <div className="header">
        <h3>Flight Search Engine</h3>
       </div>
       <div className="content">
        <div className="row">
          <div className="col-3">
            <SearchFilter />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-12">
              </div>
            </div>
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
  }
}
