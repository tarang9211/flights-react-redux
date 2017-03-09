import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { filterOneWaySearchResults } from '../actions/index';

class OneWayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: "",
      destination: "",
      departureDate: "",
      numberOfPassengers: 0
    };
  }

  handleOnChange = state =>
    e => {
      this.setState({
        [state]: e.target.value
      });
    }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.origin === this.state.destination) {
      alert('Origin and destination cannot be the same');
      this.setState({ origin: '', destination: '' });
      return;
    }
    const {
      origin,
      destination,
      departureDate,
      numberOfPassengers
    } = this.state;

    this.props.filterOneWaySearchResults({
      origin,
      destination,
      departureDate,
      numberOfPassengers
    });
  }

  setDepartureDate = e => {
    this.setState({
      departureDate: moment(e.target.value).format('DD MM YYYY')
    });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>

          <div className="group">
            <input
              type="text"
              value={this.state.origin}
              placeholder="Enter origin city"
              onChange={this.handleOnChange("origin")}
              required
            />
          </div>

          <div className="group">
            <input
              type="text"
              value={this.state.destination}
              placeholder="Enter destination city"
              onChange={this.handleOnChange("destination")}
              required
            />
          </div>

          <div className="group">
            <label>
              <span>Departure Date:</span>
            </label>
              <input
                type="date"
                onChange={this.setDepartureDate}
                min={moment().format('YYYY-MM-DD')}
                required
              />
          </div>

          <div className="group">
            <input
              type="number"
              value={this.state.numberOfPassengers}
              onChange={this.handleOnChange("numberOfPassengers")} placeholder="Number of passengers"
              required
            />
          </div>

          <button type="submit">Search</button>

        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { filterOneWaySearchResults }
)(OneWayForm);
