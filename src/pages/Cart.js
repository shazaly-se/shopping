import React from 'react'
import CartItems from '../components/CartItems'
import ProductsApi from '../api/products'
import {connect} from 'react-redux'
import {clearCart} from '../store/actions/actions'
class Cart extends React.Component {
    placeOrder = () =>{
        //send request to server
        //clear cart
        this.props.clearCart()
    }
    render(){
        return (
            <div className="container">
                 {this.props.total==0?<></>:  <h1>Cart</h1>}
              
                <div className="row">
                    {this.props.total==0?<h1>Your cart is empty</h1>:<></>}
                    {this.props.cartItems.map((item,index) =>
                    <div className={'col-3'} key={index}>
                    <CartItems item={item} index={index} />
                    </div>
                    )}
                
            
                </div>
                <br/>
                <h3>Total: {this.props.total}</h3>
                <br/>
                <button disabled={this.props.total==0} className="btn btn-primary btn-block" onClick={this.placeOrder}>Place order</button>
            </div>
        )
    }

}
const mapStateToProps = (state) =>{
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total,item) => total + item.quantity * item.product.price,0)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        clearCart: () => dispatch(clearCart()) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
