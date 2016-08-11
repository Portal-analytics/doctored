import React from 'react'
import ReactRouter from 'react-router'
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('./Main');
var Dispute = require('./Dispute');


var routes = (
  <Router history = {hashHistory}>
    <Route path='/' component={Main} />
    <Route path='/dispute' component={Dispute}/>
  </Router>
  );
  
module.exports = routes;