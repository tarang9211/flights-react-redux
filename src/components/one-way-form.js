import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { airports } from '../data';
import { filterOneWaySearchResults } from '../actions/index';
import { matchStateToTerm, styles } from '../utils';

class OneWayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: "",
      destination: "",
      departureDate: "",
      numberOfPassengers: 0,
      fare: 20000
    };

    this.destinations = [];
  }

  handleOriginSelect = origin => {
    console.log('here');
    this.setState({ origin });
    this.destinations = airports.filter(item => item.name !== origin);
    console.log(this.destinations);
  }

  handleDestinationSelect = destination => {
    this.setState({ destination });
  }

  handleSliderChange = e => {
    console.log('fare ---', e.target.value);
    this.setState({ fare: parseInt(e.target.value) });
  }

  handlePassengerChange = e => {
    this.setState({ numberOfPassengers: e.target.value });
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
      numberOfPassengers,
      fare
    } = this.state;

    this.props.filterOneWaySearchResults({
      origin,
      destination,
      departureDate,
      numberOfPassengers,
      fare
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
                onChange={(event, value) => this.setState({ origin: value })}
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
            <label>
              <span>Choose your departure date</span>
            </label>
              <input
                type="date"
                onChange={this.setDepartureDate}
                min={moment().format('YYYY-MM-DD')}
                required
              />
          </div>

          <div className="group">
            <label>Enter number of passengers</label>
            <input
              type="number"
              value={this.state.numberOfPassengers}
              onChange={this.handlePassengerChange}
              placeholder="Number of passengers"
              required
            />
          </div>

          <div className="group">
            <label>Choose your price range</label>
            <input
              type="range"
              onChange={this.handleSliderChange}
              min={5000}
              max={20000}
              step={500}
              value={this.state.fare}
            />
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
  { filterOneWaySearchResults }
)(OneWayForm);
