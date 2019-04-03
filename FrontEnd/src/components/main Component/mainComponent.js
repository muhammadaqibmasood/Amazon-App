import React, { Component } from 'react';
import computer from './pics/computer.jpg'
import { Link } from 'react-router-dom';
import selectData from '../../selectors/filterSelector';
import baby from './pics/baby.jpg'
import baby1 from './pics/baby1.jpg'
import electronics from './pics/electronics.jpg'
import household from './pics/household.jpg'
import Footer from '../../footer/footer';
import household1 from './pics/household1.jpg'
import mens from './pics/mens.jpg'
import mens1 from './pics/mens1.jpg'
import womens from './pics/womens.jpg'
import womens1 from './pics/womens1.jpg'
import pic1 from './pics/pic1.jpg';
import pic2 from './pics/pic2.jpg';
import pic3 from './pics/pic3.jpg';
import pic4 from './pics/pic4.jpg';
import pic5 from './pics/pic5.jpg';
import pic6 from './pics/pic6.jpg';
import './css/main.css'
import {setUsers} from '../../actions/data';
import { connect } from 'react-redux'
import { baseUrl } from '../../shared'

class Maincomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>{
      fetch(baseUrl+'getAllProducts')
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data)
      
        this.props.dispatch(setUsers(json.data))}
    )
      .catch((error) => console.log(error))
    }

    render() { 
        return ( <div>
          {this.props.select.length===0&&this.props.filters.text===''&&
<div id='container'>
<div id="carouselExampleIndicators" class="carousel slide h-25" data-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src={household}class="d-block crospic w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={mens} class="d-block crospic w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={womens} class="d-block crospic w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={electronics}class="d-block crospic w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={baby} class="d-block crospic w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={computer} class="d-block crospic w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="flase"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="false"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div id='main-container'className="container-fluid ">
  <div className="row ContainerRow">
 <div className="col-md-4 mycolumn">
 <Link class="nav-link" to='/Mans Fashion'>
 <div class="card main">
  <img src={mens1} class="card-img-top images" alt="not found"/>
  <div class="card-body">
    <h4 class="card-text">Men's Fashion</h4>
    <h6>Shop your favorite brands</h6>
  </div>
</div>
</Link>
 </div>
 <div className="col-md-4 mycolumn">
 <Link  class="nav-link" to='/Womens Fashion'>
 <div class="card main">
  <img src={womens1} class="card-img-top images" alt="not found"/>
  <div class="card-body">
    <h4 class="card-text">women's Fashion</h4>
    <h6>Shop your favorite brands</h6>
  </div>
</div></Link>
 </div>
 <div className="col-md-4 mycolumn"> <Link  class="nav-link" to='/Household'>
 <div class="card main">
  <img src={household1} class="card-img-top images" alt="not found"/>
  <div class="card-body">
    <h4 class="card-text">Household Things</h4>
    <h6>Shop your favorite brands</h6>
  </div>
</div></Link>
 </div>
 <div className="col-md-4 mycolumn">
 <Link  class="nav-link" to='/Baby'>
 <div class="card main">
  <img src={baby1} class="card-img-top images" alt="not found"/>
  <div class="card-body">
    <h4 class="card-text">Baby Fashion</h4>
    <h6>Shop your favorite brands</h6>
  </div>
</div></Link>
 </div>
  </div>
  <div className="row moreslides">
  <div className="col-sm-4">
  <img src={pic1} class="card-img-top images" alt="not found"/>
  </div>
  <div className="col-sm-4">
  <img src={pic2} class="card-img-top images" alt="not found"/>
  </div>
  <div className="col-sm-4">
  <img src={pic3} class="card-img-top images" alt="not found"/>
  </div>
  <div className="col-sm-4">
  <img src={pic4} class="card-img-top images" alt="not found"/>
  </div>
  <div className="col-sm-4">
  <img src={pic5} class="card-img-top images" alt="not found"/>
  </div>
  <div className="col-sm-4">
  <img src={pic6} class="card-img-top images" alt="not found"/>
  </div>
  <div className="col-sm-4">
  <h1>Amazon Display Ads</h1>
  <br/>
  <p>Reach your customers with display advertising <br/>
   on Amazon.com, mobile, and Kindle.<br />
   Sell your Android apps on the Amazon <br />Appstore and reach millions on Kindle Fire,<br /> Amazon Fire TV and select Android devices.<br /> It’s easy to get started, over 75% of Android apps we tested<br /> work with no additional development necessary.
</p>
  </div>
  <div className="col-sm-4">
  <h1>Amazon Monetization </h1>
  <br/>
  <p>Monetize your apps and games by integrating <br/>
   on Amazon.com, mobile, and Kindle.<br />
   Sell your Android apps on the Amazon <br />Appstore and reach millions on Kindle Fire,<br /> Amazon Fire TV and select Android devices.<br /> It’s easy to get started, over 75% of Android apps we tested<br /> work with no additional development necessary.
</p>
  </div>
  <div className="col-sm-4">
  <h1>Amazon Webapps</h1>
  <br/>
  <p>Sell your HTML5 apps and mobile optimized websites<br/>
   on Amazon.com, mobile, and Kindle.<br />
   Sell your Android apps on the Amazon <br />Appstore and reach millions on Kindle Fire,<br /> Amazon Fire TV and select Android devices.<br /> It’s easy to get started, over 75% of Android apps we tested<br /> work with no additional development necessary.
</p>
  </div>
  <div className="col-sm-4">
  <h1>Direct Publishing</h1>
  <br/>
  <p>Kindle Direct Publishing makes it fast and <br/>
  easy for you to independently publish your <br />
  book for free and reach millions of Kindle and  <br />Appstore and reach millions on Kindle Fire,<br /> Amazon Fire TV and select Android devices.<br /> It’s easy to get started, over 75% of Android apps we tested<br /> work with no additional development necessary.
</p>
  </div>
  <div className="col-sm-4">
  <h1>CreateSpace</h1>
  <br/>
  <p>CreateSpace helps you easily create, publish, <br/>
  and distribute your printed book to <br />
  Amazon.com and Amazon’s European websites for free <br /> Amazon Fire TV and select Android devices.<br /> It’s easy to get started, over 75% of Android apps we tested<br /> work with no additional development necessary.
</p>
  </div>
  <div className="col-sm-4">
  <h1>ACX</h1>
  <br/>
  <p>The Audiobook Creation Exchange (ACX) <br/>
  gives you control over audiobook production<br />
  Connect with a network of leading audiobook  <br />Appstore and reach millions on Kindle Fire,<br /> Amazon Fire TV and select Android devices.<br /> It’s easy to get started, over 75% of Android apps we tested<br /> producers, or learn what you need to know to produce it yourself.
</p>
  </div>
  
  
  </div>
  </div>
  </div> }
  <Footer />
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

export default connect(mapStateToProps)(Maincomponent);