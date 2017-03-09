import React, { Component } from 'react';
import FlightTabs from './flight-tabs';

class SearchFilter extends Component {
  render() {
    return (
      <div className='search-fiter-container'>
        <FlightTabs />
      </div>
    );
  }
}

export default SearchFilter;
