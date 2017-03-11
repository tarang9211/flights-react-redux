import {
  SET_TAB,
  FILTER_ONE_WAY_RESULTS,
  FILTER_RETURN_RESULTS
} from '../actions/index';

import {
  filterOneWayFlights,
  filterReturnFlights
} from '../utils';

import { flights } from '../data';

const initialState = {
  searchResults: flights,
  activeTab: 'one-way',
  isSearched: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_TAB:
      return {
        ...state,
        activeTab: action.activeTab
      };

    case FILTER_ONE_WAY_RESULTS:
      return {
        ...state,
        searchResults: filterOneWayFlights(action.payload, state.activeTab),
        isSearched: true
      };

    case FILTER_RETURN_RESULTS:
      return {
        ...state,
        searchResults: filterReturnFlights(action.payload, state.activeTab),
        isSearched: true
      };

    default:
      return state;
  }
}
