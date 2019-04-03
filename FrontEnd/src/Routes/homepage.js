import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavebarLoggedIn from '../navbar loggedin/navebar';
import Navebar from '../navbar/navebar';
import Maincomponent from '../components//main Component/mainComponent';
import SignIn from '../signin/Sign In';
import SignUp from '../signup/Sign Up';
import './css/routes.css';
import Electronics from '../components/Electronics/electronics';
import { addUser } from '../actions/user';
import { connect } from 'react-redux';
import { setUsers } from '../actions/data';
import Carts from '../carts/carts';
import Information from '../information/information';
import HealthCare from '../components/HealthCare/HealthCare';
import Grocery from '../components/Grocery/Grocery';
import MansFashion from '../components/Mens fashion/mens';
import WomensFashion from '../components/womens fashion/womens';
import Baby from '../components/baby/baby';
import AboutUs from '../footer/AboutUs';
import Careers from '../footer/Careers';
import HowToBuy from '../footer/HowToBuy';
import PrivecyPolicy from '../footer/PrivecyPolicy';
import SellOnEmazon from '../footer/SellOnEmazon';
import TermsCondition from '../footer/TermsCondition';
import { baseUrl } from '../shared'

class Routes extends Component {
  constructor(props) {
    super(props);
    fetch(baseUrl+'getAllProducts', { method: 'GET' })
      .then((res) => res.json())
      .then((json) => {
        this.props.dispatch(setUsers(json.data))
      })
      .catch((error) => console.log(error))
    console.log('json.data');

  }
  componentDidMount = () => {
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user !== null) {
      this.props.dispatch(addUser(user));
    }




  }
  render() {
    const { user } = this.props
    return (


      <BrowserRouter>
        <div id='main'>
          {user.length !== 0 && <NavebarLoggedIn />}
          {user.length === 0 && <Navebar />}
          <Switch>
            <Route exact path='/' component={Maincomponent} />
            {user.length !== 0 && <Route path='/Carts' component={Carts} />}
            {user.length === 0 && <Route path='/SignIn' component={SignIn} />}
            {user.length === 0 && <Route path='/SignUp' component={SignUp} />}
            <Route path='/Electronics' component={Electronics} />
            <Route path='/Grocery' component={Grocery} />
            <Route path='/Womens Fashion' component={WomensFashion} />
            <Route path='/Baby' component={Baby} />
            <Route path='/Mans Fashion' component={MansFashion} />
            <Route path='/Health&Care' component={HealthCare} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/career' component={Careers} />
            <Route path='/howtobuy' component={HowToBuy} />
            <Route path='/privecy' component={PrivecyPolicy} />
            <Route path='/sellonemazon' component={SellOnEmazon} />
            <Route path='/terms' component={TermsCondition} />
            <Route path='/information/:id' component={Information} />
          </Switch>

        </div>

      </BrowserRouter>

    );
  }
}
const mapStateToProps = (store) => {
  return {
    user: store.user,
    //   data: store.user.find(data=>data._id!=='')
  };
};
export default connect(mapStateToProps)(Routes);