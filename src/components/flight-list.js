import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div key={flight.id}>
              one way component, {flight.type}, {flight.id}
            </div>
        );
        } else {
          return (
          <div key={flight.id}>
            return, {flight.type}, {flight.id}
          </div>
        );
        }
      }
    });
  }

  render() {
    return (
      <div className="flight-list-container">
        {this.renderFlightList()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  searchResults: state.flights.searchResults,
  activeTab: state.flights.activeTab
})

export default connect(mapStateToProps)(FlightList);
