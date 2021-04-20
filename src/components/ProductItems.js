import React from 'react'
import { Link } from 'react-router-dom'

function ProductItems({product}) {
    return (
        <div>
             <div className="card" style={{width: '18rem'}}>
                       <img src={product.image} className="card-img-top" alt="..."  />
                         <div className="card-body">
                          <h5 className="card-title">{product.name} </h5>
                           <p className="card-text">price {product.price} $</p>
                        <Link to={"/products/" +product.id} className="btn btn-primary">Details</Link>
                    </div>
                </div>   
        </div>
    )
}

export default ProductItems
