import React from 'react'
import { getById } from '../api/products';
import {connect} from 'react-redux'
import {addToCart} from '../store/actions/actions'
class Product extends React.Component{
    state ={
        loading:true,
        product:{},
        quantity:0
    }
    componentDidMount()
    {
        const id= this.props.match.params.id;
       getById(id)
       .then(product => {this.setState({product:product,loading:false})})
    }
     handleQuantity = (event) =>{
         const value = event.target.value;
         if(value < 0)
         return ;
        this.setState({quantity:value})
    }
    addToCart = (product) =>{
      
        this.props.addToCart(product,this.state.quantity)
    }
    render()
    {
        const product = this.state.product
        const quantity = this.state.quantity
        if(this.state.loading)
        return <h5>loading...</h5>
        return (
            <div className="container">
          
              <div className={'row'}>
                  <div className="col-sm-6">
                     <img src={product.image} width={'100%'}/>
                  </div>
                  <div className="col-sm-6">
                <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                  
                   <input type="number" value={quantity} onChange={this.handleQuantity}/>
                   <br/><br />
                 <p>Total: {quantity * product.price}</p>
                   <button disabled={quantity < 1} className="btn btn-primary" onClick={() =>this.addToCart(product)}>Add to cart</button>
                  </div>
              </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)) 
    }
}
export default connect(null,mapDispatchToProps)(Product);
