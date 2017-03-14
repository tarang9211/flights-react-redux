import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { filterReturnSearchResults } from '../actions/index';
import { airports } from '../data';
import { matchStateToTerm, styles } from '../utils';

class ReturnForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      departureDate: '',
      returnDate: '',
      numberOfPassengers: 1,
      routeOneFare: 20000,
      routeTwoFare: 20000
    };

    this.destinations = [];
  }

  setDepartureDate = (e) => {
    this.setState({
      departureDate: moment(e.target.value).format('DD MM YYYY')
    });
  }

  setReturnDate = (e) => {
    this.setState({
      returnDate: moment(e.target.value).format('DD MM YYYY')
    });
  }

  handleOriginSelect = (origin) => {
    this.setState({ origin });
    this.destinations = airports.filter(item => item.name !== origin);
  }

  handleDestinationSelect = (destination) => {
    this.setState({ destination });
  }

  handlePassengerChange = (e) => {
    this.setState({ numberOfPassengers: e.target.value });
  }

  handleFareChange = state => (e) => {
    this.setState({ [state]: parseInt(e.target.value) });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.origin === this.state.destination) {
      this.setState({ origin: '', destination: '' });
    }
    const {
      origin,
      destination,
      departureDate,
      returnDate,
      numberOfPassengers,
      routeOneFare,
      routeTwoFare
    } = this.state;

    this.props.filterReturnSearchResults({
      origin,
      destination,
      departureDate,
      returnDate,
      numberOfPassengers,
      routeOneFare,
      routeTwoFare
    });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>

          <div className="group">
            <Autocomplete
              autoHighlight
              value={this.state.origin}
              items={airports}
              onChange={(event, value) => this.setState({ origin: value })}
              onSelect={this.handleOriginSelect}
              renderItem={(item, isHighlighted) => (
                <div
                  style={isHighlighted ? styles.highlightedItem : styles.item}
                  key={item.abbr}
                >{item.name}
                </div>
                )}
              getItemValue={item => item.name}
              shouldItemRender={matchStateToTerm}
              inputProps={{ placeholder: 'Enter your origin', required: true }}
            />
          </div>

          <div className="group">
            <Autocomplete
              autoHighlight
              value={this.state.destination}
              items={this.destinations}
              onChange={(event, value) => this.setState({ destination: value })}
              onSelect={this.handleDestinationSelect}
              renderItem={(item, isHighlighted) => (
                <div
                  style={isHighlighted ? styles.highlightedItem : styles.item}
                  key={item.abbr}
                >{item.name}
                </div>
                )}
              getItemValue={item => item.name}
              shouldItemRender={matchStateToTerm}
              inputProps={{ placeholder: 'Enter your destination', required: true }}
            />
          </div>

          <div className="group">
            <label htmlFor="departureDate">
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
            <label htmlFor="returnDate">
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
            <label htmlFor="numberOfPassengers">Enter number of passengers</label>
            <input
              type="number"
              value={this.state.numberOfPassengers}
              onChange={this.handlePassengerChange}
              placeholder="Number of passengers"
              required
            />
          </div>

          <div className="group">
            <label htmlFor="routeOneFare">Choose route one fare</label>
            <input
              type="range"
              onChange={this.handleFareChange('routeOneFare')}
              min={5000}
              max={20000}
              step={500}
              value={this.state.routeOneFare}
            />
            <p><small className="gray">Max price for route-one: </small>&#8377; {this.state.routeOneFare}</p>
          </div>

          <div className="group">
            <label htmlFor="routeTwoFare">Choose route two fare</label>
            <input
              type="range"
              onChange={this.handleFareChange('routeTwoFare')}
              min={5000}
              max={20000}
              step={500}
              value={this.state.routeTwoFare}
            />
            <p><small className="gray">Max price for route-two: </small>&#8377; {this.state.routeTwoFare}</p>
          </div>

          <div className="group actions">
            <button type="submit">Search</button>
          </div>

        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { filterReturnSearchResults }
)(ReturnForm);
