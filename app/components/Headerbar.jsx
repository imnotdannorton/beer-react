import React from 'react';
import {Link} from 'react-router'
export default class Headerbar extends React.Component {
  render() {
    return (
      <div id="header">
        <Link to="/">Check In</Link>
        <Link to="/feed">Pairing</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}
