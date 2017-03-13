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
        <span className="block">{flight_code}</span>
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
