import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addUser } from '../../actions/user';
import { connect } from 'react-redux';
import '../Electronics/css/components.css';
import '../main Component/css/main.css';
import Footer from '../../footer/footer';
import selectData from '../../selectors/filterSelector';
import { baseUrl } from '../../shared'

class WomensFashion extends Component {
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
        array = [];
        let user = this.props.user[0] || [];
        let product = this.props.product || [];
        product.map((el) => {
            if (el.category === 'Womens Fashion') {
                array.push(el);
            }
        })
        return (<div>
          {this.props.select.length===0&&this.props.filters.text===''&&
            <div className='container bg-white'>
                
                    <h1>Womens Fashion</h1>
                    <span> <Link to='/' class="fas fa-home fa-1x"></Link>  <i class="fas fa-angle-right fa-1x"></i> Women Fashion</span>
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
                <div className="row">
                    {
                        array.map((data) =>
                            <div className="col-md-4 column">
                                <div className="card mycard">
                                    <Link className='myLink' to={`/information/${data._id}`}>
                                        <img className="card-img-top images" src={`${baseUrl}${data.image}`} alt="Not Found" />
                                        <p>{data.name}</p>
                                        <p >{data.description}</p></Link>
                                    <span className="myprice">Per {data.unit}</span>
                                    <i className="fas fa-plane-departure myprice"> Express: Same Day Delivery</i>
                                    <i className="fas fa-truck myprice"> Standard: Next Day Delivery</i>
                                    <p className="myprice">Rs. {data.price}</p>
                                    <button className="btn btn-outline-dark" onClick={this.addToCart.bind(this, data._id, user._id)}>Add to Cart</button>
                                </div>
                            </div>
                        )}
                </div>
            </div> }
                <Footer />


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

export default connect(mapStateToProps)(WomensFashion);