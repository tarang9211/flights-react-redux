import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import { setTab } from '../actions/index';
import OneWayForm from './one-way-form';
import ReturnForm from './return-form';

class FlightTabs extends Component {
  handleTabSelect = (index, last) => {
    const activeTab = index === 0 ? 'one-way': 'return';
    this.props.setTab(activeTab);
  }

  render() {
    return (
      <Tabs onSelect={this.handleTabSelect}>
        <TabList>
          <Tab>One Way</Tab>
          <Tab>Return</Tab>
        </TabList>

        <TabPanel>
          <OneWayForm />
        </TabPanel>

        <TabPanel>
          <ReturnForm />
        </TabPanel>
      </Tabs>
    );
  }
}

export default connect(
  null,
  { setTab }
)(FlightTabs);
