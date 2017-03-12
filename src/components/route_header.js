import React, { PropTypes } from 'react';

const RouteHeader = ({ activeTab, isSearched, flight }) => {
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
          <h3>{flight.origin} {flight.destination}</h3>
        );
      } else {
        return (
          <h3>{flight.origin} {flight.destination} - {activeTab}</h3>
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
}


export default RouteHeader;
