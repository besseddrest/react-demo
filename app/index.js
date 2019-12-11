var React = require('react');
var ReactDOM = require('react-dom');
import $ from 'jquery';
import 'foundation-sites';
import './scss/style.scss';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);