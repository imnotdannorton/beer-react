import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';

export default class BeerSelect extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  componentWillMount(){
  }
  activate(){
    jQuery('.submitWrapper').addClass('beer-active');
  }
  deactivate(){
    console.log("deactivate");
    jQuery('.submitWrapper').removeClass('beer-active');
  }
  render() {
    return (
      <div className="beer-select">

        <h3 onClick={this.activate}>Select Beer</h3>
        <strong onClick={this.deactivate}>done</strong>
      </div>
    );
  }
}
