import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';

export default class Pair extends React.Component {
  constructor(){
    super();
    this.state = {
      movie:{}
    }
  }
  componentWillMount(){
    const endpoint = 'http://www.omdbapi.com/?i=' + this.props.movies[0] + '&y=&plot=full&r=json&max=10'
    if(this.props.movies[0]){
      jQuery.ajax({
        method:'GET',
        url: endpoint,
        success: (movie) => {
          this.setState({movie});
          console.log(movie);
        }
      })
    }

  }
  render() {
    return (
      <Link className="pairlink" to={'/match/' + this.props.matchlink}>
        <img src={this.state.movie.Poster}/>
        <h4>
          {this.state.movie.Title} & {this.props.beer}
        </h4>
      </Link>
    );
  }
}
