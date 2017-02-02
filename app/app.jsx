var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
//Load foundation-sites
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation;

//App css
require('style!css!sass!aplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
