import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';

class Home extends Component {
  render(){
    return (
    	<div>
        <div className="div--container__home">
          <p><img className="img--home__logo" src="http://res.cloudinary.com/huecloud/image/upload/v1517519224/huelogo_yufyyq.png" /></p>
          <h2 className="h2--profile">Welcome to Hue </h2>
          <h2 className="h2--profile__droid">a color detection utility for designers, by designers</h2>
          <h3 className="h3--profile">Been here before?</h3>
          <button className="button--profile" onClick={this.renderWheel}>login</button>
          <h3 className="h3--profile">Need an account?</h3>
          <button className="button--profile" onClick={this.renderWheel}>signup</button>
        </div>
      </div>
      );
  }
}

export default Home;
