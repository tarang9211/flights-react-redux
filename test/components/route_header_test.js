import moment from 'moment';
import { renderComponent, expect } from '../test_helper';
import RouteHeader from '../../src/components/route_header';
import { flights } from '../../src/data';

describe('RouteHeader', () => {
  let component;

  it('should render the text for all one-way flights', () => {
    const props = { activeTab: 'one-way', isSearched: false };
    component = renderComponent(RouteHeader, props);
    expect(component.find('.listing_title')).to.have.text('Showing all results for one-way flights!');
  });

  it('should render the text for all return flights', () => {
    const props = { activeTab: 'return', isSearched: false };
    component = renderComponent(RouteHeader, props);
    expect(component.find('.listing_title')).to.have.text('Showing all results for return flights!');
  });

  it('should render the title for a searched one-way query with multiple flights returned', () => {
    const props = {
      activeTab: 'one-way',
      isSearched: true,
      results: 10,
      flight: flights[0],
      departureDate: moment().format('MM DD YYYY'),
      returnDate: undefined
    };

    component = renderComponent(RouteHeader, props);
    expect(component.find('.trip_header_location_info')).to.have.text('Pune →Delhi10 flights found');
  });

  it('should render the title for a searched one-way query with a single flight returned', () => {
    const props = {
      activeTab: 'one-way',
      isSearched: true,
      results: 1,
      flight: flights[0],
      departureDate: moment().format('MM DD YYYY'),
      returnDate: undefined
    };

    component = renderComponent(RouteHeader, props);
    expect(component.find('.trip_header_location_info')).to.have.text('Pune →Delhi1 flight found');
  });
});
