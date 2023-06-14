import React, { useContext } from 'react'
import "./Card.css";


export default function Card(props) {
    return (
        <>
            <div className='main-card'>
                <div className='img-flex'>
                    <model-viewer className="img-fluid" alt="model" src={props.img} ar ar-modes="scene-viewer webxr" camera-controls></model-viewer>
                </div>
                <div className='bottom'>
                    <h1 className='h1'>{props.title}</h1>
                    <p className='price'>{props.price}</p>

                </div>
            </div>
        </>
    )
}
