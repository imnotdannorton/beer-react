import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';
import Match from 'components/Match';
import jquery from 'jquery';

import { Router, Route, browserHistory, Link } from 'react-router';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="match" component={Match}/>
    </Route>
  </Router>, document.querySelector('#app'));
});
