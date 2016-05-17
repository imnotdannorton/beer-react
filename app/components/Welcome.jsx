import React from 'react';
import Matchlist from './Matchlist';
export default class Welcome extends React.Component {
  constructor(){
    super();
    this.state = {
      ctas:['Drinking', 'Watching'],
      activeCta:0
    }
  }
  render() {
    return (
      <div id="hero">
        <h1>What Are You {this.state.ctas[this.state.activeCta]}?</h1>
        <Matchlist/>
      </div>
    );
  }
  componentDidMount() {
    this._timer = setInterval(() => this._updateCta(), 5000)
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
  _updateCta() {
    if(this.state.activeCta < this.state.ctas.length-1){
      this.state.activeCta++;
    }else{
      this.state.activeCta = 0;
    }
    this.setState({activeCta:this.state.activeCta})
  }
}
