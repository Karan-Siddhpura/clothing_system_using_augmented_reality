import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function Login() {

    const [user, setUser] = useState({ email: '', password: '' })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })
            localStorage.setItem('firstLogin', true)
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <div className="main-auth">
            <div className='auth-left'>
                <h3 className='title'>Login</h3>
                <p className='sub-title'>Welcome user, Please Login</p>
                <form className='form-main' onSubmit={loginSubmit}>
                    <input type="email" name="email" required className='input' autocomplete="off" onChange={onChangeInput}
                        placeholder="Email" value={user.email} />
                    <br /><br />
                    <input type="password" name="password" required autocomplete="off" className='input' onChange={onChangeInput}
                        placeholder="Password" value={user.password} />
                    <br /><br />
                    <div className='buttons'>
                        <button className="login-button" type="submit">Login</button>
                        <Link to='/register'><button className="register-button" type="submit">Register</button></Link>
                    </div>

                </form>
            </div >
            <div className='auth-right'>
                <div className='svg'>
                    <img src="./asset/login.png" className='img-fluid' />
                </div>
            </div>
        </div >
    )
}
