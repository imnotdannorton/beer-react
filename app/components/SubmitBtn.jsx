import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';

export default class SubmitBtn extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }
  componentWillMount(){
  }
  render() {
    return (
      <div className="btn-wrap">
        <button className="submit">Play!</button>
      </div>
    );
  }
}
