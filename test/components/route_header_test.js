import { renderComponent, expect } from '../test_helper';
import RouteHeader from '../../src/components/route_header';

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
});
