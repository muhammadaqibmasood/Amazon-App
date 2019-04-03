import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../actions/user';
import selectData from '../selectors/filterSelector';
import { baseUrl } from '../shared'

import './info.css';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      message1:'',
      message:''
  }
}
addToCart = (product, user) => {
  if(user){
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
        this.state.array=[];
        
       
          this.props.dispatch(addUser(user));
          this.setState({message1:'Added to Your Cart'})
       
      })})
    .catch((error) => console.log(error))
  }
else{
this.setState({message:'Please Sign In First for place Order'})
}
}
onreverse=()=>{
this.setState({message:''})
}
onreverse1=()=>{
this.setState({message1:''})
}

render() {
  let { array,message,message1 } = this.state;
    array=[]; 
    let user = this.props.user[0] || [];
    console.log('id',this.props.match.params.id)
    let product = this.props.product || [];
    product.map((el) => {
      if (el._id === this.props.match.params.id) {
        array.push(el);
      }
    })
    //  let array1=[];
    //  array1=array;
    //  this.setState({array:[]})
     console.log(array);
    //  console.log('array1',array1)
    return (<div>
      {this.props.select.length===0&&this.props.filters.text===''&&
      <div className='container '>
        <h1>Information</h1>
        { message!==''&&<div class="alert alert-warning alert-dismissible fade show alertcart" role="alert">
<strong>Error!</strong>{message}
<button type="button" class="close" onClick={this.onreverse}data-dismiss="alert" aria-label="Close">
 <span aria-hidden="true">&times;</span>
</button>
</div>}
{ message1!==''&&<div class="alert alert-warning alert-dismissible fade show alertcart1" role="alert">
<strong>Success!</strong>{message1}
<button type="button" class="close" onClick={this.onreverse1}data-dismiss="alert" aria-label="Close">
 <span aria-hidden="true">&times;</span>
</button>
</div>}
          {
              array.map((data) =>
        <div className="row">
              <div className="col-md-4 ">
                <div className="infocard">
        
                  <img  id='img' src={`${baseUrl}${data.image}`} alt="Not Found" />
                </div>
              </div>
              <div className='col-md-4 detail'>
                  <h1>{data.name}</h1>
                  <p className="datainfo">{data.price}</p>
                  <p className="datainfo">{data.unit}</p>
                  <p className='desc'>{data.description}</p>
                  <i className="fas fa-plane-departure extradesc"> Express: Same Day Delivery</i>
                   <i className="fas fa-truck extradesc"> Standard: Next Day Delivery</i><br />
                   <br/>
                  
                   <button type="button" class="btn btn-outline-success detailbtn" onClick={this.addToCart.bind(this, data._id, user._id)}>Add To Cart</button>
                  
                  </div>
                  <div className='col-md-4 detaildiv'>
                      <h2>Working Hours</h2> 
                      <p className='para'>Mon-Sun /9:00Am to 9:00Pm</p>  
                      <p className='para'>Emazone Pohanchy BarWaqt Ap ki Amanat Ap k Pas...!</p>
                      <p className='para'>
                      If you're an inventor, you'll love being an Amazonian.<br /> From day one at Amazon, you'll take ownership of projects that have a direct impact on our customers.
                      </p>
                  </div>
        </div>
            )}
      </div>}


    </div>);
  }
}
const mapStateToProps = (store) => {

  return {
    product: store.data || [],
    user: store.user || [],
    filters: store.filters,
    select: selectData(store.data, store.filters),
 };
};

export default connect(mapStateToProps)(Information);