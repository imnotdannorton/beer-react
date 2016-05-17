import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';
import Matchlist from 'components/Matchlist';
import Matchup from 'components/Matchup';
import Welcome from 'components/Welcome';
import jquery from 'jquery';

import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="match" component={Matchlist}/>
      <Route path="match/:id" component={Matchup}/>

    </Route>
  </Router>, document.querySelector('#app'));
});
