import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/mainnavbar.css'
import { connect } from 'react-redux'
import amazon from './amazon.png'
import { setTextFilter } from '../actions/filters';
import selectData from '../selectors/filterSelector';
import { addUser } from '../actions/user';
import { baseUrl } from '../shared'

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message1: '',
      message: ''
    }
  }

  addToCart = (product, user) => {
    if (user) {
      console.log('product', product)
      console.log('user', user)
      var options = {
        method: 'POST', body: JSON.stringify({ product: product, user: user }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(baseUrl+'addCart', options)
        .then((res) => res.json())
        .then((json) => {

          fetch(baseUrl+'findCart', options)
            .then((res) => res.json())
            .then((json) => {
              localStorage.setItem('user', JSON.stringify(json.data))
              var user = JSON.parse(localStorage.getItem('user'));
              this.state.array = [];


              this.props.dispatch(addUser(user));
              this.setState({ message1: 'Added to Your Cart' })

            })
        })
        .catch((error) => console.log(error))
    }
    else {
      this.setState({ message: 'Please Sign In First for place Order' })
    }
  }
  onreverse = () => {
    this.setState({ message: '' })
  }
  onreverse1 = () => {
    this.setState({ message1: '' })
  }
  onTextChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.props.setTextFilter(e.target.value);
  };
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.left = "-50px";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  render() {
let{message,message1}=this.state;
let{user}=this.props;
    return (
      <div>
        <nav id='navbar' className="navbar-fluid navbar-expand-md navbar-dark my-navbar position-sticky sticky-top">
          <div className='container-fluid'>
            <div id='row1' className='row'>
              <div className="col-1.5 col-sm-1.5">
                <button id='button' onMouseOver={this.openNav} className="navbar-toggler" type="button">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link className='navbar-brand' to='/'><img className='amazonpic' src={amazon} alt="not found" /></Link>
              </div>
              <div className="col-12 col-sm-8">
                <form className="navbar-form" onSubmit={this.onTextChange} role="search">
                  <div className="input-group add-on">
                    <input className="form-control" value={this.props.filters.text}
                      onChange={this.onTextChange} placeholder="Search" name="srch-term" id="srch-term" type="text" />
                    <div className="input-group-btn">
                      <button id='searchbtn' className="btn btn-default" disabled><span className="fa fa-search"></span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id='row2' className='row mt-2 '>
              <div className="col-12">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <div className='container'>
                      <div className='row mynav justify-content-around'>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/Mans Fashion'>‏Man's Fashion</Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/Baby'>Baby</Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/Womens Fashion'>Women's Fashion</Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/Grocery'>Grocery & Home Items</Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/Electronics'>Electronics</Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/Health&Care'>Health & Care</Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/SignIn'>Sign In</Link>
                          </li>
                        </div>
                        <div className='col-md-3'>
                          <li className="nav-item">
                            <Link id='navbarLinks1' className="nav-link" to='/SignUp'>Sign Up</Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id='mySidenav' className='container sidenav'>
            <div className='row'>
              <div className="col-sm-12 ">
                <button type="button" className="close" id='close' onClick={this.closeNav} >&times;</button>
                <Link className='navbar-brand' to='/appnamart'><img id='amazonpic' src={amazon} alt="" /></Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/SignIn'>Sign In</Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/SignUp'>Sign Up</Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/Mans Fashion'>‏Man's Fashion</Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/Baby'>Baby</Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/Womens Fashion'>Women's Fashion</Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/Grocery'>Grocery & Home Items</Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/Electronics'>Electronics</Link>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-1.5'>
                <Link id='navbarLinks' className="nav-link" onClick={this.closeNav} to='/Health&Care'>Health & Care</Link>
              </div>
            </div>
          </div>
        </nav>
        {
          this.props.select.length !== 0 ? <div className='container bg-white'>

            <h1>Search Results</h1>
            <span> <Link to='/' class="fas fa-home fa-1x"></Link>  <i class="fas fa-angle-right fa-1x"></i> Search Results</span>

            {message !== '' && <div class="alert alert-warning alert-dismissible fade show alertcart" role="alert">
              <strong>Error!</strong>{message}
              <button type="button" class="close" onClick={this.onreverse1} data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>}
            {message1 !== '' && <div class="alert alert-warning alert-dismissible fade show alertcart1" role="alert">
              <strong>Success!</strong>{message1}
              <button type="button" class="close" onClick={this.onreverse1} data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>}
            <div className="row">
              {
                this.props.select.map((data) =>
                  <div className="col-6 col-md-3 column">
                    <div class="card mycard">
                      <Link className='infoLink' to={`/information/${data._id}`}>
                        <img class="card-img-top images4" src={`${baseUrl}${data.image}`} alt="Not Found" />
                        <p>{data.name}</p>
                      </Link>
                      <span class="myprice">Per {data.unit}</span>
                      <i class="fas fa-plane-departure myprice"> Express: Same Day Delivery</i>
                      <i class="fas fa-truck myprice"> Standard: Next Day Delivery</i>
                      <p class="myprice">Rs. {data.price}</p>
                      <button class="btn btn-outline-dark" onClick={this.addToCart.bind(this, data._id, user._id)}>Add to Cart</button>
                    </div>
                  </div>
                )}
            </div>
          </div> :this.props.filters.text!==''&&<div className='container'> <h1>Search Results</h1>
            <span> <Link to='/' class="fas fa-home fa-1x"></Link>  <i class="fas fa-angle-right fa-1x"></i> Search Results</span>
<h4>No Such item Found</h4></div>
        }
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text))
});
const mapStateToProps = (store) => {
  return {
    filters: store.filters,
    select: selectData(store.data, store.filters),
    user: store.user || []
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);