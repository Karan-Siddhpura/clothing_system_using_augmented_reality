import React, { useContext, useState, useEffect } from 'react'
import "./Productitems.css";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { GlobalState } from '../../../../GlobalState'
import axios from 'axios'
import Loading from '../Loading/Loading'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Productitems({ product, isAdmin, deleteProduct, handleCheck }) {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 700
        });
        AOS.refresh();
    }, []);

    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    const [loading, setLoading] = useState(false)


    if (loading) return <div className='main-product'><Loading /></div>

    return (
        <>
            <div className='main-product' data-aos="fade-up">
                <div className="product-padding">
                    {
                        isAdmin && <input type="checkbox" checked={product.checked}
                            className='product-card-input'
                            onChange={() => handleCheck(product._id)} />
                    }

                    {
                        product.flag ? <div className='img-flex-p'>
                            <model-viewer className="img-fluid" alt={product.title} src={product.images.url} ios-src={product.images.url} shadow-intensity="1" ar ar-modes="scene-viewer webxr" camera-controls></model-viewer>
                        </div> :

                            <div className='img-flex-p td-image'>
                                <img className="img-fluid" src={product.images.url} />
                            </div>
                    }
                </div>
                <div className='line-p'></div>
                <div className='bottom-p'>
                    <h1 className='product-h1'>{product.title}</h1>
                    <p className='price-p'> ${product.price}</p>
                    <p className='description-p'>{product.description}</p>
                    <div className='card-bottom-p'>
                        {
                            isAdmin ?
                                <>
                                    <Link to onClick={() => deleteProduct(product._id, product.images.public_id)}>
                                        <Button style={{ width: "100px" }} variant="contained">Delete</Button>
                                    </Link>
                                    <Link to={`/edit_product/${product._id}`}>
                                        <Button style={{ width: "100px" }} variant="contained">Edit</Button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to={`/detail/${product._id}`}>
                                        <Button style={{ width: "100px" }} variant="contained">View</Button>
                                    </Link>
                                    <Link to="#!" onClick={() => addCart(product)}>
                                        <Button style={{ width: "100px" }} variant="contained">Buy</Button>
                                    </Link>
                                </>
                        }

                    </div>

                </div>
            </div>
        </>
    )
}
