import React, { PropTypes } from 'react';

const RouteHeader = ({ activeTab, isSearched, flight, results }) => {
  const plural = results === 1 ? 'flight' : 'flights';
  if (!isSearched) {
    return (
      <div className="listing_header_all">
        <h3>Showing all results for {activeTab} flights!</h3>
      </div>
    );
  } else {
    if (flight) {
      if (activeTab === 'one-way') {
        return (
          <div className="trip_header">
            <h3>{flight.origin} <span>&#8594;</span>{flight.destination}</h3>
            <h6>{results} {plural} found</h6>
          </div>
        );
      } else {
        return (
          <div className="trip_header">
            <div className="trip_header">
              <h3>{flight.origin} <span>&#8594;</span>{flight.destination} <span>&#8594;</span> {flight.origin}</h3>
              <h6>{results} {plural} found</h6>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h3>No search results to display for your search!</h3>
        </div>
      );
    }
  }
}

RouteHeader.propTypes = {
  isSearched: PropTypes.bool,

  activeTab: PropTypes.string,

  flight: PropTypes.object,

  results: PropTypes.number
}


export default RouteHeader;
