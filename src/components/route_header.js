import React, { PropTypes } from 'react';

const RouteHeader = ({ activeTab, isSearched, flight }) => {
  if (!isSearched) {
    return (
      <div>
        <p>Showing all results for {activeTab} flights!</p>
      </div>
    );
  } else {
    if (activeTab === 'one-way') {
      return (
        <h3>{flight.origin} {flight.destination}</h3>
      );
    }
  }
}

RouteHeader.propTypes = {
  isSearched: PropTypes.bool,

  activeTab: PropTypes.string,
}


export default RouteHeader;
