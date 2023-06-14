import React, { useState } from 'react'
import "./style.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Register() {


    const [user, setUser] = useState({
        name: '', email: '', password: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/register', { ...user })
            localStorage.setItem('firstLogin', true)
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="main-auth">
            <div className='auth-left'>
                <h3 className='title'>Register</h3>
                <p className='sub-title'>Welcome user, Please Register</p>
                <form className='form-main' onSubmit={registerSubmit}>
                    <input type="text" name="name" required className='input'
                        placeholder="Name" value={user.name} onChange={onChangeInput} autocomplete="off" />
                    <br /><br />
                    <input type="email" name="email" required className='input'
                        placeholder="Email" value={user.email} onChange={onChangeInput} autocomplete="off" />
                    <br /><br />
                    <input type="password" name="password" required className='input'
                        placeholder="Password" value={user.password} onChange={onChangeInput} autocomplete="off" />
                    <br /><br />
                    <div className='buttons'>
                        <button type="submit" className='register-button'>Register</button>
                        <Link to='/login'><button className="login-button" type="submit">Login</button></Link>
                    </div>
                </form>
            </div>
            <div className='auth-right'>
                <div className='svg'>
                    <img src="./asset/register.svg" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}
