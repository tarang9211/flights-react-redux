import React, { PropTypes } from 'react';
import { formatHourMinute } from '../utils';

const ReturnFlightDetail = ({ customClass, flight }) => {
  const { origin, destination } = flight;
  const flightCode = flight[`${customClass}_code`];
  const flightFare = flight[`${customClass}_fare`];
  const departureTime = flight[`${customClass}_departure`];
  const arrivalTime = flight[`${customClass}_arrival`];
  const duration = flight[`${customClass}_duration`];

  return (
    <div className={`${customClass}_info`}>
      <div className={`${customClass}_code`}>
        <span className="block">{flightCode}</span>
        <span className="small-gray">Flight no</span>
      </div>
      <div className={`${customClass}_origin`}>
        <span className="block">{formatHourMinute(departureTime)}</span>
        <span className="small-gray">{origin} &#8594; {destination}</span>
      </div>
      <div className={`${customClass}_destination`}>
        <span className="block">{formatHourMinute(arrivalTime)}</span>
        <span className="small-gray">{duration}</span>
      </div>
      <div className={`${customClass}_fare`}>
        <span className="block">&#8377; {flightFare}</span>
      </div>
      <div className="book_return">
        <button className="button-book">Book</button>
      </div>
    </div>
  );
};

ReturnFlightDetail.propTypes = {
  customClass: PropTypes.string,

  flight: PropTypes.object
};

export default ReturnFlightDetail;
