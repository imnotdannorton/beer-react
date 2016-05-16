import React from 'react';
import {Link} from 'react-router'
export default class Headerbar extends React.Component {
  render() {
    return (
      <div id="header">
        <Link to="/">Home</Link>
        <Link to="/match">Matches</Link>
      </div>
    );
  }
}
