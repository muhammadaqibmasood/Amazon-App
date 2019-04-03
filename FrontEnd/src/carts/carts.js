import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectData from '../selectors/filterSelector';
import { baseUrl } from '../shared'

import './css/carts.css'
class Carts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    }
  }
 
  

  render() {
    const { array } = this.state;
    let user = this.props.user[0] || [];

    console.log('carts',user.cart);
    let product = this.props.product || [];
    for(let i=0;i<user.cart.length;i++){
    product.map((el,) => {
      if (el._id === user.cart[i]) {
        array.push(el);
      }
    })}
    //  let array1=[];
    //  array1=array;
    //  this.setState({array:[]})
     console.log(array);
    //  console.log('array1',array1)
    return (<div>
      {this.props.select.length===0&&this.props.filters.text===''&&<div>
        {user.cart.length===0?<div>You have no carts yet</div>:
      <div className='container mycarts'>
        <h1>Your Carts</h1>
          {
              array.map((data) =>
              <div className="row cartsss">
                    <div className="col-md-4 cartss ">
                      <div className="infocard">
              
                        <img  id='img' src={`${baseUrl}${data.image}`} alt="Not Found" />
                      </div>
                    </div>
                    <div className='col-md-4 cartss detail'>
                        <h1>{data.name}</h1>
                        <p className="datainfo">{data.price}</p>
                        <p className="datainfo">{data.unit}</p>
                        <p className='desc'>{data.description}</p>
                        <i className="fas fa-plane-departure extradesc"> Express: Same Day Delivery</i>
                         <i className="fas fa-truck extradesc"> Standard: Next Day Delivery</i><br />
                         <br/>
                                        
                        </div>
                        <div className='col-md-4 cartss detaildiv'>
                            <h2>Working Hours</h2> 
                            <p className='para'>Mon-Sun /9:00Am to 9:00Pm</p>  
                            <p className='para'>Emazone Pohanchy BarWaqt Ap ki Amanat Ap k Pas...!</p>
                            <p className='para'>
                            If you're an inventor, you'll love being an Amazonian.<br /> From day one at Amazon, you'll take ownership of projects that have a direct impact on our customers.
                            </p>
                        </div>
              </div>
                  
            )}
      </div>

          } </div>}
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

export default connect(mapStateToProps)(Carts);