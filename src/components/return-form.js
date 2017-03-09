import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { filterReturnSearchResults } from '../actions/index';

class ReturnForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      departureDate: '',
      returnDate: '',
      numberOfPassengers: ''
    };
  }

  handleOnChange = state =>
    e => {
      this.setState({
        [state]: e.target.value
      });
    }

  setDepartureDate = e => {
    this.setState({
      departureDate: moment(e.target.value).format('DD MM YYYY')
    });
  }

  setReturnDate = e => {
    this.setState({
      returnDate: moment(e.target.value).format('DD MM YYYY')
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.origin === this.state.destination) {
      this.setState({ origin: '', destination: '' });
    }
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      numberOfPassengers
    } = this.state;

    this.props.filterReturnSearchResults({
      origin,
      destination,
      departureDate,
      returnDate,
      numberOfPassengers
    });
  }

  render() {
    return (
      <div className='form-container'>
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
            <label>
              <span>Return Date:</span>
            </label>
              <input
                type="date"
                onChange={this.setReturnDate}
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
};

export default connect(
  null,
  { filterReturnSearchResults }
)(ReturnForm)
