import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token);
      this.props.updateUser();
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    })
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
                <div>
                  <input name="Name"
                       placeholder="name"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                  />
                </div>
                <div>
                  <input name="Email"
                       placeholder="email"
                       value={this.state.email}
                       onChange={this.handleEmailChange} />
               </div>
               <div>
                  <input name="Password"
                     placeholder="password"
                     type="password"
                     value={this.state.password}
                     onChange={this.handlePasswordChange} />
                 </div>
                 <input type="submit" value="Sign up!" className="btn-primary button--primary" />
              </form>);
    }
    return (
      <div className="div--container__form signup">
        <h1 className="h1--auth">Create an account!</h1>
        <h1 className="h1--auth__free">(it's free)</h1>
        {form}
        {this.props.user ? <Redirect to="/profile" /> : ''}
      </div>
    );
  }
}

export default Signup;
