import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';
import SubmitBtn from './SubmitBtn';
import CommentBox from './CommentBox';
import WatchSelect from './WatchSelect';
import BeerSelect from './BeerSelect';

export default class Submit extends React.Component {
  constructor(){
    super();
    this.state = {
      selectorActive:null
    }
  }
  componentWillMount(){
  }
  render() {
    return (
      <div className="submitWrapper">
        <WatchSelect/>
        <BeerSelect/>
        <CommentBox/>
        <SubmitBtn/>
      </div>
    );
  }
}
