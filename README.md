# Flight Search Engine

[![Build Status](https://travis-ci.org/tarang9211/flights-react-redux.svg?branch=master)](https://travis-ci.org/tarang9211/flights-react-redux)

<br />

### Introduction
flights-react-redux is a simple flight search engine app that lets a user search for one-way and return flights.

Since a public Flight API is not used, the data has been manually crafted for the purpose of this search engine.

The app has been built with a TDD based approach along with Continuous Integration with Travis CI and Continuous Deployment with Heroku.


### Instructions - Using this app
Pune and Delhi have the most number of data points, so when using this search please use those as test points.

For one-way flights, three cities are provided namely: Pune, Delhi, and Rajasthan.

Example: The app can be used to search for flights from Pune to Delhi over the next 4 days.

In certain cases, a search might not reveal any flights to handle the business condition in which no flights exist for those locations or that particular time-frame.

For return flights, the same cities are provided.


### Build Instructions
Clone this repo using the following command in your terminal:
`git clone https://github.com/tarang9211/flights-react-redux.git`

Once that is done, please follow the following steps:
- `cd flights-react-redux`
- `npm install --save`
- `npm start`
