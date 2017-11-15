import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';

export default class WatchSelect extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }
  componentWillMount(){
  }
  render() {
    return (
      <div className="comment-box">
        <textarea></textarea>
      </div>
    );
  }
}
