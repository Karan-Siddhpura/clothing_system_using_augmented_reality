import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState';
import Productitems from '../utils/Productsitems/Productitems';
import "./Products.css";
import Loading from '../utils/Loading/Loading'
import axios from 'axios';
import Filters from './Filters'
import Footer from '../Footer/Footer';
import LoadMore from '../Products/LoadMore';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Card() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callBack, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    useEffect(() => {
        AOS.init({
            offset: 170,
            duration: 200
        });
        AOS.refresh();
    }, []);

    console.log(state)

    const handleCheck = (id) => {
        products.forEach(product => {
            if (product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async (id, public_id) => {

        console.log({ id, public_id })
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', { public_id }, {
                headers: { Authorization: token }
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: { Authorization: token }
            })
            await destroyImg
            await deleteProduct
            setCallback(!callBack)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)

        }
    }

    const checkAll = () => {
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () => {
        products.forEach(product => {
            if (product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    if (loading) return <div className='main-product'><Loading /></div>

    return (
        <>
            <Filters />
            <div className='select'>
                {
                    isAdmin &&
                    <div className="delete-all">
                        <span>Select all</span>
                        <input type="checkbox" checked={isCheck} onChange={checkAll} />
                        <button onClick={deleteAll}>Delete ALL</button>
                    </div>
                }
            </div>

            <div className='products'>
                {
                    products.map(product => {
                        return <Productitems key={product._id}
                            product={product}
                            isAdmin={isAdmin}
                            deleteProduct={deleteProduct}
                            handleCheck={handleCheck}
                        />
                    })
                }
            </div>
            <LoadMore />
            {products.length === 0 && <Loading />}
            <Footer />
        </>
    )
}
