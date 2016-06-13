import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';
import endpoints from '../services/endpoints';

export default class Matchup extends React.Component {
  constructor(){
    super();
    this.state = {
      matchup:{},
      movie:{}
    }

  }
  componentWillMount(){
    const id = this.props.params.id;
    jQuery.ajax({
      method:'GET',
      url:endpoints.beer_endpoint+'/fetchpair/'+id,
      success: (matchup) => {
        console.log(matchup);
        this.setState({matchup:matchup[0]});
        if(this.state.matchup.movies[0]){
          this._fetchMovie(this.state.matchup.movies[0]);
        }
      }
    })
  }
  render() {
    const activeBeer = this.state.matchup;
    const activeMovie = this.state.movie;
    console.log(this.state.matchup);
    const flickStyle = {
      backgroundImage: 'url(' + activeMovie.Poster + ')',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
    }
    const beerStyle = {
      backgroundImage: 'url(' + activeBeer.img + ')',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat'
    }
    return (
      <div className="matchup">
        <div className="beer" style={beerStyle}>
          <div className="darken"></div>
          <img src={activeBeer.img}/>
          <h2>{activeBeer.name}</h2>
          <p>{activeBeer.desc}</p>
        </div>
        <div className="flick" style={flickStyle}>
          <div className="darken"></div>
          <img src={activeMovie.Poster}/>
          <h2>{activeMovie.Title}</h2>
          <p>{activeMovie.Plot}</p>

        </div>
        <div className="desc">
          {activeBeer.review}
        </div>

      </div>
    );
  }
  _fetchMovie(id){
    jQuery.ajax({
      method:'GET',
      url: endpoints.movie_endpoint+'?i='+id+'&y=&plot=full&r=json&max=10',
      success: (movie) => {
        this.setState({movie:movie});
      }
    })
  }
}
