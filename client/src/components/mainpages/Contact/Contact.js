import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'


export default function Contact() {
    return (
        <>
            <div className='contact-us'>
                <div className='contact-left'>
                    <h1 className='contact-heading'>Contact Us</h1>
                    <div className='contact-line'></div>
                    <p className='contact-quote'>Fashion.<br />
                        It could be just<br />  a thing your body needs. </p>
                    <p className='contact-p'>TryOuts is a concept where users’ satisfaction based on using state of the art technology from ordering wearables and trying them out online. </p>
                    <p className='contact-p'>Always humans, never bots. The hands down, sharpest and friendliest support teams in the Biz. Contact us and we'll get back to you in <b>2 business days</b>. </p>
                    <p className='contact-email'>Email : Tryouts@gmail.com</p>
                    <p className='contact-email'>Toll-Free No. : 1800 111 2323</p>

                </div>
                <div className='contact-right'>
                    <img className='contact-img img-fluid' src='./asset/contact.jpg' />
                </div>

            </div>
            <Footer />
        </>
    )
}
