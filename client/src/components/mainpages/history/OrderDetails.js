import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'

function OrderDetails() {
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    const [orderDetails, setOrderDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        if (params.id) {
            history.forEach(item => {
                if (item._id === params.id) setOrderDetails(item)
            })
        }
    }, [params.id, history])


    if (orderDetails.length === 0) return null;
    console.log(orderDetails)

    return (
        <div className="history-page">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Postal Code</th>
                        <th>Country Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orderDetails.address.recipient_name}</td>
                        <td>{orderDetails.address.line1 + " - " + orderDetails.address.city}</td>
                        <td>{orderDetails.address.postal_code}</td>
                        <td>{orderDetails.address.postal_code}</td>
                    </tr>
                </tbody>
            </table>

            <table style={{ "margin-top": "10px" }}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product description</th>
                        <th>Product Name</th>

                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderDetails.cart.map(item => (
                            <tr key={item._id}>
                                <td> {
                                    item.flag ?
                                        <model-viewer className="img-fluid" alt={item.title} src={item.images.url} ios-src={item.images.url} shadow-intensity="1" ar ar-modes="scene-viewer webxr" camera-controls></model-viewer>
                                        :
                                        <img className="img-fluid history-page" alt={item.title} src={item.images.url} />
                                }</td>
                                <td>{item.description}</td>
                                <td>{item.title}</td>
                                <td>{item.size}</td>
                                <td>{item.quantity}</td>
                                <td>$ {item.price * item.quantity}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div >
    )
}

export default OrderDetails
