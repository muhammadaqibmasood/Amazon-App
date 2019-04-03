import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year:new Date().getFullYear() }
    }
    render() { 
        return (
            
             <div id='foot'className='container-fluid bg-dark'>
<div className="row">
<div className="col-sm-6 justify-content-center">
<div className='row'>
            <div id='navbarLinks3' className='col-sm-6 text-center text-xl-lef'>
             Reference
            </div>
            </div>
             <div className="dropdown-divider"></div>
<div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link "  to='/Mans Fashion'>‏Man's Fashion</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/Baby'>Baby</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/Womens Fashion'>Women's Fashion</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/Household'>Household</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/Electronics'>Electronics</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/Computers'>Computers</Link>
            </div>
          </div>
</div>

<div className="col-sm-6 justify-content-center">
<div className='row'>
            <div id='navbarLinks3' className='col-sm-6 text-center text-xl-lef'>
             Reference
            </div>
            </div>
             <div className="dropdown-divider"></div>
<div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link "  to='/career'>‏Careers</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/aboutus'>AboutUs</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/howtobuy'>How To Buy</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/privecy'>Privecy Policy</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/sellonemazon'>Sell On Emazon</Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6 text-center'>
              <Link id='navbarLinks2' className="link"  to='/terms'>Terms & Condition</Link>
            </div>
          </div>
         


</div>


<div className="col-sm-6">
<div className="dropdown-divider"></div>
<div className="row"><div id='navbarLinks3' className="col-sm-6">Contact Us</div></div>
<div className="row"><div id='navbarLinks2' className="col-sm-6"><i className="fas fa-phone-volume size-4x"></i>+92300-7965301</div></div>
<div className="row"><div id='navbarLinks2' className="col-6"><i className="fas fa-envelope"></i>muhammadaqibaqibmasood@gmail.com</div></div>
</div>

<div className="col-sm-6">
<div className="dropdown-divider"></div>
<div className="row"><div id='navbarLinks3' className="col-sm-6"><h3>Working Days</h3></div></div>
<div className="row"><div id='navbarLinks2' className="col-sm-6"><h5>Delivery InTime withOut Absence</h5></div></div>
<div className="row"><div id='navbarLinks2' className="col-6">Mon-Sun / 9:00Am to 9:00Pm</div></div>
</div>



</div>



<div className="dropdown-divider"></div>
<div className="row justify-content-center"><div id='navbarLinks2' className="col-5 ">Copy Right <sup><i className="far fa-copyright"></i></sup> {this.state.year}</div></div>
        </div>
        
     
            );
    }
}
 
export default Footer;