import { flights } from './data';

export const filterOneWayFlights = (filter, type) => {
  return flights.filter(flight => {
    const sameDepartureDate = flight.departureDate === filter.departureDate;
    const sameOrigin = flight.origin === filter.origin;
    const sameDestination = flight.destination === filter.destination;
    const sameType = flight.type === type;
    return sameDepartureDate && sameOrigin && sameDestination && sameType;
  });
};

export const filterReturnFlights = (filter, type) => {
  return flights.filter(flight => {
    const sameDepartureDate = flight.departureDate === filter.departureDate;
    const sameReturnDate = flight.returnDate === filter.returnDate;
    const sameOrigin = flight.origin === filter.origin;
    const sameDestination = flight.destination === filter.destination;
    const sameType = flight.type === type;
    return sameDepartureDate && sameReturnDate && sameOrigin && sameDestination && sameType;
  });
};
