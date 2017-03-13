import moment from 'moment';
import { renderComponent, expect } from '../test_helper';
import ReturnFlightDetail from '../../src/components/return_flight_detail';

describe('ReturnFlightDetail', () => {
  let component;

  const flight = {
    type: 'return',
    id: 6,
    route_one_code: 'EA - 512',
    route_two_code: 'EA - 640',
    origin: 'Pune',
    destination: 'Delhi',
    route_one_fare: 6500,
    route_two_fare: 6500,
    route_one_departure: moment().add(2, 'hours'),
    route_one_arrival: moment().add(4, 'hours'),
    route_two_departure: moment().add(8, 'hours'),
    route_two_arrival: moment().add(9, 'hours'),
    departureDate: moment().format('DD MM YYYY'),
    returnDate: moment().add('1', 'days').format('DD MM YYYY'),
    route_one_duration: '2h 10m',
    route_two_duration: '1h 55m'
  };

  const propsOne = {
    customClass: 'route_one',
    flight
  };

  const propsTwo = {
    customClass: 'route_two',
    flight
  };


  it('should render appropriate flight code for route one', () => {
    component = renderComponent(ReturnFlightDetail, propsOne);
    expect(component.find('.route_one_code .block')).to.have.text(flight.route_one_code);
  });

  it('should render appropriate flight code for route two', () => {
    component = renderComponent(ReturnFlightDetail, propsTwo);
    expect(component.find('.route_two_code .block')).to.have.text(flight.route_two_code);
  });

  it('should render appropriate origin for route one', () => {
    component = renderComponent(ReturnFlightDetail, propsOne);
    expect(component.find('.route_one_origin .small-gray')).to.have.text('Pune → Delhi');
  });

  it('should render appropriate origin for route two', () => {
    component = renderComponent(ReturnFlightDetail, propsTwo);
    expect(component.find('.route_two_origin .small-gray')).to.contain('Delhi → Pune');
  });

  it('should render appropriate flight fare for route one', () => {
    component = renderComponent(ReturnFlightDetail, propsOne);
    expect(component.find('.route_one_fare .block .fare_amount')).to.have.text('6500');
  });

  it('should render appropriate flight fare for route two', () => {
    component = renderComponent(ReturnFlightDetail, propsTwo);
    expect(component.find('.route_two_fare .block .fare_amount')).to.have.text('6500');
  });

  it('should render duration for route one', () => {
    component = renderComponent(ReturnFlightDetail, propsOne);
    expect(component.find('.route_one_fare')).to.have.text('₹6500');
  });

  it('should render duration for route two', () => {
    component = renderComponent(ReturnFlightDetail, propsTwo);
    expect(component.find('.route_two_fare')).to.have.text('₹6500');
  });

  it('should render the book button for route one', () => {
    component = renderComponent(ReturnFlightDetail, propsOne);
    expect(component.find('.book_return .button-book')).to.exist;
  });

  it('should render the book button for route two', () => {
    component = renderComponent(ReturnFlightDetail, propsTwo);
    expect(component.find('.book_return .button-book')).to.exist;
  });
});
