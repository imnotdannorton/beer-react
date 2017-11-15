import React from 'react';
import {Link} from 'react-router'
import jQuery from 'jquery';
import endpoints from '../services/endpoints';
export default class WatchSelect extends React.Component {
  constructor(){
    super();
    this.state = {
      searchTerm:'',
      movieList:[],
      activeMovie:null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount(){
  }
  activate(){
    jQuery('.submitWrapper').addClass('watch-active');
  }
  deactivate(){
    console.log("deactivating watch");
    jQuery('.submitWrapper').removeClass('watch-active');
  }
  handleChange(event){
    console.log('new term:', event.target.value);
    this.setState({searchTerm: event.target.value});
  }
  handleSearch(){
    console.log("searching", this.state.searchTerm);
    jQuery.ajax({
      method:'GET',
      url:endpoints.movie_endpoint+'?s=' + this.state.searchTerm+'&y=&plot=full&r=json&max=10&apikey=67edd1ac',
      success: (movies) => {
        console.log(movies["Search"]);
        this.setState({movieList:movies["Search"]});
        // if(this.state.matchup.movies[0]){
        //   this._fetchMovie(this.state.matchup.movies[0]);
        // }
      }
    })
  }
  setActiveMovie(obj){
    this.setState({activeMovie:obj});
    jQuery.css({'background-image':obj.Poster, 'background-size':'cover', 'background-repeat':'no-repeat'})
  }
  render() {
    var movies = this._buildMovieList();
    return (
      <div className="watch-select">
        <strong onClick={this.deactivate}>done</strong>
        <h3 onClick={this.activate}>Select Movie</h3>
        <ul>{movies}</ul>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
  _buildMovieList(){
    if(this.state.movieList.length > 0){
      return this.state.movieList.map((movie) =>
        {
          return (
            <li onClick={this.setActiveMovie(movie)}><img src={movie.Poster}/><span>movie.Title</span></li>
          )
        });
    }else{
      return "";
    }

  }
}
