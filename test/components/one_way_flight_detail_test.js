import { renderComponent, expect } from '../test_helper';
import OneWayFlightDetail from '../../src/components/one_way_flight_detail';

describe('OneWayFlightDetail Component', () => {
  let component;

  const props = {
    flightCode: 'PD - 202',
    origin: 'Pune',
    destination: 'Delhi',
    fare: 5000
  };

  beforeEach(() => {
    component = renderComponent(OneWayFlightDetail, props);
  });

  it('should render the component', () => {
    expect(component).to.exist;
  });

  it('should display flight code', () => {
    expect(component.find('.code_info .block')).to.have.text('PD - 202');
  });

  it('should display the appropriate origin', () => {
    expect(component.find('.origin_info .small-gray')).to.have.text('Pune');
  });

  it('should display the appropriate destination', () => {
    expect(component.find('.destination_info .small-gray')).to.have.text('Delhi');
  });

  it('should display the appropriate fare', () => {
    expect(component.find('.fare_info .block .fare_amount')).to.have.text('5000');
  });
});
