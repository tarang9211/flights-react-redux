import React, { PropTypes } from 'react';
import { formatHourMinute } from '../utils';

const OneWayFlightDetail = ({ flight_code, departureDate, origin, destination, fare, duration, arrival }) => {
  return (
    <div className="one_way_list_item">
      <div className="code_info">
          <span className="block">{flight_code}</span>
          <span><small>Flight no.</small></span>
      </div>
      <div className="origin_info">
        <span className="block">{formatHourMinute(departureDate)}</span>
        <span>{origin}</span>
      </div>
      <div className="destination_info">
        <span className="block">{formatHourMinute(arrival)}</span>
        <span>{destination}</span>
      </div>
      <div className="duration_info">
        <span className="block">{duration}</span>
      </div>
      <div className="fare_info">
        <span className="block">&#8377; {fare}</span>
      </div>
      <div className="book_one_way">
        <button className="button-book">Book</button>
      </div>
    </div>
  );
};

OneWayFlightDetail.propTypes = {
  flight_code: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  fare: PropTypes.number
}

export default OneWayFlightDetail;
