import React, { Component } from 'react';
import selectData from '../selectors/filterSelector';
import Footer from '../footer/footer';
import { connect } from 'react-redux';
import { baseUrl } from '../shared'
class Instantfood extends Component {
    constructor(props) {
        super(props);
        this.state={
          category:'',
          unit:'',
          fileToShare:null,
          price:'',
          name:'',
          description:'',
          loading:false,
        };
        (function(){
            window.addEventListener('load', function() {
              // Fetch all the forms we want to apply custom Bootstrap validation styles to
              var forms = document.getElementsByClassName('needs-validation');
              // Loop over them and prevent submission
              var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
          })();
        }
        onpriceChange = (e) => {
          const price = e.target.value;
          if (!price || price.match(/^[1-9]\d*$/)){
            this.setState(() => ({ price }))}
        }
        onnameChange = (e) => {
          const name = e.target.value;
          this.setState(() => ({ name }));
        };
        ondescriptionChange = (e) => {
          const description = e.target.value;
          this.setState(() => ({ description }));
        };
        onCategoryChange = (e) => {
          const category = e.target.value;
          this.setState(() => ({ category }));
        };
        onUnitChange = (e) => {
          const unit = e.target.value;
          this.setState(() => ({ unit }));
        };
            onFileChange = (e) => {
              console.log(e.target.files[0])
              const fileToShare = e.target.files[0];
              this.setState(() => ({ fileToShare }));
            };
        
        SaveToServer=(e)=>{
          e.preventDefault();
            const formData = new FormData();
        formData.append('myImage',this.state.fileToShare);
        formData.append('name',this.state.name);
        formData.append('category', this.state.category);
        formData.append('description',this.state.description);
        formData.append('price',this.state.price);
        formData.append('unit',this.state.unit);
              fetch(baseUrl+'Admin-Panel', {
                method: 'POST',
                body: formData
              }).then((response) => {
                response.json()}).then((response)=>{
              this.setState({loading:true})
             setTimeout(()=>{this.props.history.push('/')},1000)
            }).catch((error) => { console.log(error);
        });

      
        }
    render() { 
      const{loading}=this.state;
      console.log(this.state.unit,this.state.category,this.state.fileToShare,this.state.name,this.state.description,this.state.price)
        return (<div>
          {this.props.select.length===0&&this.props.filters.text===''&& <div>{loading?<div className="d-flex justify-content-center loading">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>:<form className="needs-validation" onSubmit={this.SaveToServer} noValidate>
        <h1>Product Admin Panel</h1>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">Select Category of Product</label>
  <select onChange={this.onCategoryChange} className="custom-select" id="inlineFormCustomSelectPref">
    <option defaultValue={this.state.category} >Choose unit</option>
    <option value="Electronics">Electronics</option>
    <option value="Mans Fashion">Mans Fashion</option>
    <option value="Womens Fashion">Womens Fashion</option>
    <option value="HealthCare">Health & Care</option>
    <option value="Baby">Baby</option>
    <option value="Grocery">Grocery & Home Items</option>
  </select> <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom02">Name of Product</label>
            <input type="text" onChange={this.onnameChange} className="form-control"  value={this.state.name}id="validationCustom02" placeholder="Name of Product"  required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationCustom02">Price of Product</label>
            <input type="text" onChange={this.onpriceChange}className="form-control" value={this.state.price} id="validationCustom02" placeholder="Price of Product"  required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom03">Select Unit of Selling</label>
  <select onChange={this.onUnitChange} className="custom-select " id="inlineFormCustomSelectPref">
    <option defaultValue={this.state.unit}>Choose unit</option>
    <option value="Dozen">Dozen</option>
    <option value="Kg">Kg</option>
    <option value="1 Ltr">Ltr</option>
    <option value="One Piece">One Piece</option>
  </select>
              <div className="valid-feedback">
              Looks good!
            </div>
          </div>
         
          <div className="col-md-6 ">
            <label htmlFor="validationCustom05">Description of Product</label>
            <input type="text" onChange={this.ondescriptionChange} value={this.state.description} className="form-control" id="validationCustom05" maxLength="40" placeholder="Description of Product" required/>
            <div className="valid-feedback">
            Looks good!
            </div>
          </div>
        </div>
  <div className="custom-file col-md-4">
  <div className="form-group border-blue">
    <label htmlFor="exampleFormControlFile1">Choose Picture of Product</label>
    <input type="file" onChange={this.onFileChange} className="form-control-file" id="exampleFormControlFile1" required/>
    <div className="valid-feedback">
    Looks good!
            </div></div>
  </div>
        <div className="form-group my-4">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label className="form-check-label" htmlFor="invalidCheck">
              Are You sure You want to Create product?
            </label>
            <div className="valid-feedback">
            Looks good!
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Create Product</button>
      </form>
    }
   <Footer /> </div>}
    </div>
      
     
        )}
}
const mapStateToProps = (store) => {

  return {
    product: store.data || [],
    user: store.user || [],
    filters: store.filters,
    select: selectData(store.data, store.filters),
  };
};

export default connect(mapStateToProps)(Instantfood);