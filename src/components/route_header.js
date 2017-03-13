import React, { PropTypes } from 'react';
import moment from 'moment';

const RouteHeader = ({ activeTab, isSearched, flight, results, departureDate, returnDate }) => {
  let departureDisplay;
  let returnDisplay;
  if (departureDate) {
    departureDisplay = moment(departureDate, 'DD MM YYYY').format('MMM Do YYYY');
  }
  if (returnDate) {
    returnDisplay = moment(returnDate, 'DD MM YYYY').format('MMM Do YYYY');
  }
  const plural = results === 1 ? 'flight' : 'flights';

  if (!isSearched) {
    return (
      <div className="listing_header_all">
        <h3 className="listing_title">Showing all results for {activeTab} flights!</h3>
      </div>
    );
  } else {
    if (flight) {
      if (activeTab === 'one-way') {
        return (
          <div className="trip_header">
            <h3>
              {flight.origin} <span>&#8594;</span>{flight.destination}
              <small className="flight_results">{results} {plural} found</small>
            </h3>
            <h3>Departure date: <small className="flight_results">{departureDisplay}</small></h3>
          </div>
        );
      } else {
        return (
          <div className="trip_header">
            <h3>
              {flight.origin}
              <span>&#8594;</span>
              {flight.destination} <span>&#8594;</span>
              {flight.origin}
              <small className="flight_results">{results} {plural} found</small>
            </h3>
            <h3>Departure date: <small className="flight_results">{departureDisplay}</small></h3>
            <h3>Return date: <small className="flight_results">{returnDisplay}</small></h3>
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
};

RouteHeader.propTypes = {
  isSearched: PropTypes.bool,

  activeTab: PropTypes.string,

  flight: PropTypes.object,

  results: PropTypes.number,

  departureDate: PropTypes.string,

  returnDate: PropTypes.string
};


export default RouteHeader;
