import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteHeader from './route_header';
import OneWayFlightDetail from './one_way_flight_detail';
import ReturnFlightDetail from './return_flight_detail';

class FlightList extends Component {
  componentWillMount() {
    console.log('component mounted ----');
    console.log(this.props);
  }

  renderFlightList = () => {
    const { activeTab, searchResults} = this.props;

    return searchResults.map(flight => {
      if (flight.type === activeTab) {
        if (flight.type === 'one-way') {
          return (
            <OneWayFlightDetail
              key={flight.id}
              origin={flight.origin}
              destination={flight.destination}
              flight_code={flight.flight_code}
              duration={flight.duration}
              arrival={flight.arrivalTime}
              fare={flight.fare}
            />
        );
        } else {
          return (
            <div className="return_list_item" key={flight.id}>
              <ReturnFlightDetail
                flight={flight}
                customClass="route_one"
              />
              <ReturnFlightDetail
                flight={flight}
                customClass="route_two"
              />
            </div>
          );
        }
      }
    });
  }

  render() {
    const { activeTab, isSearched } = this.props;
    const flight = this.props.searchResults[0];
    return (
      <div className="flight-list-container">
        <div className="col-12 container_header">
          <RouteHeader activeTab={activeTab} isSearched={isSearched} flight={flight}/>
        </div>
        {this.renderFlightList()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  searchResults: state.flights.searchResults,
  activeTab: state.flights.activeTab,
  isSearched: state.flights.isSearched
})

export default connect(mapStateToProps)(FlightList);
