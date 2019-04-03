import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './css/login.css';
import { addUser } from '../actions/user';
import selectData from '../selectors/filterSelector';
import { connect } from 'react-redux'
import { baseUrl } from '../shared'

class Create extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      fullname:'',
      message:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

var options1 = {
    method: 'POST',
    body: JSON.stringify({fullname: this.state.fullname, email: this.state.email.toLowerCase(), password:this.state.password }),
    headers: {
        'Content-Type': 'application/json'
    }

}
fetch(baseUrl+'/register', options1)
    .then((res) => res.json())
    .then((message) =>{
      const {success,user}=message;
    if(success===true){
      var options2 = {
        method: 'POST',
        body: JSON.stringify({ username:user.email.toLowerCase, password:user.password }),
        headers: {
          'Content-Type': 'application/json'
        }
        
      }
      fetch(baseUrl+'/login', options2)
      .then((res) => res.json())
  
      .then((message) =>{
        localStorage.setItem('user', JSON.stringify(message.user));
      var user=JSON.parse(localStorage.getItem('user'));
   if(user!==null){
          this.props.dispatch(addUser(user));}
        console.log(message.user);
        this.props.history.push('/')
      })
      .catch(() => {
      })
    }else{
      this.setState({message:'Email Already Registerd please Sign in'})
    }
    
   })
    .catch((error) => this.setState({message:'Email Already Registerd'}))

  }
  onclosing=()=>{
    this.setState({message:''})
  }

  render() {
    const { email, password,fullname,message } = this.state;
    return (<div className='signUpbackpic'>
      {this.props.select.length===0&&this.props.filters.text===''&&
    <div className="container">{message!==''&&<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Error!</strong> {message}
    <button type="button" onclick={this.onclosing} class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>}
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Register</h2>
          <label for="inputText" >Full Name</label>
          <input type="text" className="form-control" placeholder="Full Name" name="fullname" value={fullname} onChange={this.onChange} required/>
          <label for="inputEmail" >Email address</label>
          <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
          <label for="inputPassword">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>}
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    filters: store.filters,
    select: selectData(store.data, store.filters),
  };
};

export default connect(mapStateToProps)(Create);