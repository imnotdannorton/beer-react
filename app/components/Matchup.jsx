import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';

export default class Matchup extends React.Component {
  constructor(){
    super();
    this.state = {
    }

  }
  componentWillMount(){
    const id = this.props.params.id;
    this._fetchPairs(id);
  }
  render() {
    // const activeBeer = this.state.matchup[0];
    console.log(this.state.matchup);
    return (
      <div className="matchup">
        // <img src={activeBeer.img}/>
        // <h2>{activeBeer.name}</h2>
      </div>
    );
  }
  _fetchPairs(id){
    jQuery.ajax({
      method:'GET',
      url:'http://localhost:8000/api/beer/fetchpair/'+id,
      success: (matchup) => {
        this.setState({matchup});
        console.log(matchup);
      }
    })
  }
}
