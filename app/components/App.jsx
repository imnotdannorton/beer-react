import React from 'react';
import Headerbar from './Headerbar';
import Foot from './Foot';
import jQuery from 'jquery';


export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Headerbar />
        {this.props.children}
        <Foot />
        <div id="bgLoader"></div>
      </div>
    );
  }
}
