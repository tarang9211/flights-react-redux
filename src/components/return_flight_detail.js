import React from 'react';
import { formatHourMinute } from '../utils';

const ReturnFlightDetail = ({ customClass, flight}) => {
  const { origin, destination } = flight;
  const flight_code = flight[`${customClass}_code`];
  const flight_fare = flight[`${customClass}_fare`];
  const departureTime = flight[`${customClass}_departure`];
  const arrivalTime = flight[`${customClass}_arrival`];
  const duration = flight[`${customClass}_duration`];

  return (
    <div className={`${customClass}_info`}>
      <div className={`${customClass}_code`}>
        <span>{flight_code}</span>
      </div>
      <div className={`${customClass}_origin`}>
        <span className="block">{formatHourMinute(departureTime)}</span>
        <small>{origin} &#8594; {destination}</small>
      </div>
      <div className={`${customClass}_destination`}>
        <span className="block">{formatHourMinute(arrivalTime)}</span>
        <span><small>{duration}</small></span>
      </div>
      <div className={`${customClass}_fare`}>
        <span className="block">&#8377; {flight_fare}</span>
      </div>
      <div className="book_return">
        <button className="button-book">Book</button>
      </div>
    </div>
  );
};

ReturnFlightDetail.propTypes = {

};

export default ReturnFlightDetail;
