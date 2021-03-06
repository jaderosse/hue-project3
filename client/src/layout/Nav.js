import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />
    if(this.props.user){
      links = <span><Logout updateUser={this.props.updateUser} /><Link onClick={this.props.toggleProfileFunc} to="/profile">Profile</Link></span>;
    } else if (this.props.user && this.prop.showProfileNav){
      links = <span><Logout updateUser={this.props.updateUser} /></span>
    }
    else {
      links = <span><Link to="/login">Login</Link><Link to="/signup">Sign Up</Link></span>
    }
    return(
        <div>
          <nav className="nav">
            <a href="/"><img className="img--brand__logo" alt="Brand Logo" src="http://res.cloudinary.com/huecloud/image/upload/v1517519224/huelogo_yufyyq.png" /><span className="span--brand__title">hue</span></a>
            {links}
          </nav>
        </div>
      );
  }
}

export default Nav;
