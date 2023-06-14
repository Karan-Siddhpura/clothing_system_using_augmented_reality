import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/Productsitems/Productitems'
import './detailProduct.css';
import axios from 'axios';

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])
    const [token] = state.token

    useEffect(() => {
        if (params.id) {

            products.forEach(product => {
                if (product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params.id, products])


    if (detailProduct.length === 0) return null;

    return (
        <>

            <div className="detail">

                {
                    detailProduct.flag ?
                        <model-viewer className="img-fluid" alt={detailProduct.title} src={detailProduct.images.url} ios-src={detailProduct.images.url} shadow-intensity="1" ar ar-modes="scene-viewer webxr" camera-controls></model-viewer>
                        :
                        <img className="img-fluid" alt={detailProduct.title} src={detailProduct.images.url} />

                }

                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                    </div>
                    <span>$ {detailProduct.price}</span>
                    <p >{detailProduct.description}</p>
                    <p >{detailProduct.content}</p>
                    <p >Sold: {detailProduct.sold}</p>
                    <Link to="/cart" className="cart"
                        onClick={() => addCart(detailProduct)}>
                        Buy Now
                    </Link>
                </div>
            </div>

            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProduct
