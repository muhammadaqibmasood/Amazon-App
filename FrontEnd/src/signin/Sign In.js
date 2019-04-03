import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import selectData from '../selectors/filterSelector';
import { addUser } from '../actions/user';
import { connect } from 'react-redux';
import { baseUrl } from '../shared'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      err:false,
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    var options = {
      method: 'POST',
      body: JSON.stringify({ username: this.state.username.toLowerCase(), password:this.state.password }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    }
    fetch(baseUrl+'login', options)
    .then((res) => res.json())

    .then((message) =>{localStorage.setItem('user', JSON.stringify(message.user));
    var user=JSON.parse(localStorage.getItem('user'));
 if(user!==null){
        this.props.dispatch(addUser(user));}
      console.log(message.user);
      this.props.history.push('/')
    })
    .catch(() => {
this.setState({message:'Username and Password are Incorrect'})
    })
  }

  render() {
    const { username, password, message } = this.state;
    return (<div className='signbackpic'>
      {this.props.select.length===0&&this.props.filters.text===''&&<div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 className="form-signin-heading">Please sign in</h2>
          <label for="inputEmail">Email Address:</label>
          <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" >Password:</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <p>
            Not a member? <Link to="/SignUp"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p>
        </form>
      </div>}</div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    filters: store.filters,
    select: selectData(store.data, store.filters),
  };
};

export default connect(mapStateToProps)(Login);