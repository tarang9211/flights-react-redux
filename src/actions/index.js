export const FILTER_ONE_WAY_RESULTS = 'FILTER_ONE_WAY_RESULTS';
export const FILTER_RETURN_RESULTS = 'FILTER_RETURN_RESULTS';
export const SET_TAB = 'SET_TAB';


export const setTab = activeTab => ({
  type: SET_TAB,
  activeTab
});

export const filterOneWaySearchResults = payload => ({
  type: FILTER_ONE_WAY_RESULTS,
  payload
});

export const filterReturnSearchResults = payload => ({
  type: FILTER_RETURN_RESULTS,
  payload
});
