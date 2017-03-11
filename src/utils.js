import { flights } from './data';

export const filterOneWayFlights = (filter, type) => {
  console.log(filter);
  return flights.filter(flight => {
    const sameDepartureDate = flight.departureDate === filter.departureDate;
    const sameOrigin = flight.origin === filter.origin;
    const sameDestination = flight.destination === filter.destination;
    const sameType = flight.type === type;
    const fare = flight.fare <= filter.fare;
    return sameDepartureDate && sameOrigin && sameDestination && sameType && fare;
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

export const styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },

  menu: {
    border: 'solid 1px #ccc'
  }
};

export function matchStateToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.code.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}
