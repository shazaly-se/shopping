import React from 'react'
import ProductItems from '../components/ProductItems'
import ProductsApi from '../api/products'
class Products extends React.Component {
    state ={
        products:[]
    }
componentDidMount(){
  ProductsApi.getAll()
  .then(data =>this.setState({products:data}))
}
    render(){
        return (
            <div className="container">
                <h1>Products</h1>
                <div className="row" style={{marginTop:'15px',marginLeft:'15px'}}>
                    {this.state.products.map(product =>
                    <div className={'col-3'}  key={product.id}>
                    <ProductItems product={product} />
                    </div>
                    )}
                
            
                </div>
            </div>
        )
    }

}

export default Products
