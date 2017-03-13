import React, { PropTypes } from 'react';
import { formatHourMinute } from '../utils';

const OneWayFlightDetail = ({ flightCode, departureDate,
  origin, destination, fare, duration, arrival }) => (
    <div className="one_way_list_item">
      <div className="code_info">
        <span className="block">{flightCode}</span>
        <span className="small-gray">Flight no.</span>
      </div>
      <div className="origin_info">
        <span className="block">{formatHourMinute(departureDate)}</span>
        <span className="small-gray">{origin}</span>
      </div>
      <div className="destination_info">
        <span className="block">{formatHourMinute(arrival)}</span>
        <span className="small-gray">{destination}</span>
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

OneWayFlightDetail.propTypes = {
  flightCode: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  fare: PropTypes.number
};

export default OneWayFlightDetail;
