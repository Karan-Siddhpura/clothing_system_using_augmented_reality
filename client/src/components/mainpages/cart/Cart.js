import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
import './cart.css'
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../Footer/Footer'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const [products] = state.productsAPI.products



    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }


    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
            else {
                console.log("not")
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const onChangeValue = (e, id) => {
        var size = e.target.value
        // cart.forEach(item => {
        //     if (item._id === id) {
        //         console.log(size)
        //         console.log(id)

        //     }
        // })

        cart.forEach(item => {
            if (item._id === id) {
                item.size = size
                console.log(id)
                console.log(item.size)
            }
            else {
                console.log("not")
            }
        })
        setCart([...cart])
        console.log(...cart)
        addToCart(cart)
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async (payment) => {
        const { paymentID, address } = payment;

        await axios.post('/api/payment', { cart, paymentID, address }, {
            headers: { Authorization: token }
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }





    if (cart.length === 0)
        return <h2 style={{ textAlign: "center", fontSize: "5rem", marginTop: "100px" }}>Cart Empty</h2>

    return (<>
        <div className='main-cart'>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        {
                            product.flag ?
                                <model-viewer className="img-fluid" alt={product.title} src={product.images.url} ar camera-controls></model-viewer>
                                :
                                <img className="img-fluid" alt={product.title} src={product.images.url} />

                        }
                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>$ {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <p>Selected Size&nbsp;:&nbsp;{product.size}</p>
                            <div className="size">
                                <Button variant="outlined" value={product.small} onClick={(e) => onChangeValue(e, product._id)} fontSize='large'>Small</Button>
                                <Button variant="outlined" value={product.medium} onClick={(e) => onChangeValue(e, product._id)} fontSize='large'>Medium</Button>
                                <Button variant="outlined" value={product.large} onClick={(e) => onChangeValue(e, product._id)} fontSize='large'>Large</Button>
                            </div>


                            <div className="amount">
                                <Button variant="outlined" onClick={() => decrement(product._id)} fontSize='large'><RemoveRoundedIcon /></Button>
                                <span>{product.quantity}</span>
                                <Button variant="outlined" onClick={() => increment(product._id)} fontSize='large'><AddRoundedIcon /></Button>
                            </div>



                            <div className="delete"
                                onClick={() => removeProduct(product._id)}>
                                <CloseIcon fontSize='large' />
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Total: $ {total}</h3>
                <PaypalButton
                    total={total}
                    tranSuccess={tranSuccess}
                />
            </div>

        </div >
        <Footer />
    </>
    )
}

export default Cart
