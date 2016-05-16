import React from 'react';
import jQuery from 'jquery';

export default class Match extends React.Component {
  constructor(){
    super();
    this.state = {
      matches: []
    }
  }
  componentWillMount(){
    this._fetchPairs();
  }
  render() {
    const pairs = this._buildPairView();
    return (
      <div className="pair">
        {pairs}
      </div>
    );
  }
  _fetchPairs(){
    jQuery.ajax({
      method:'GET',
      url:'http://localhost:8000/api/beer',
      success: (matches) => {
        this.setState({matches});
        console.log(matches);
      }
    })
  }
  _buildPairView(){
    return this.state.matches.map((match) =>
      {
        return (
          <div class="beer">
            <img src={match.img}></img>
            <p>{match.desc}</p>
          </div>
        )
      });
  }
}
