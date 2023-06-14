import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState.js";
import cartsvg from "./icon/cart.svg";
import "./header.css";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Header() {

  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  const [cart] = state.userAPI.cart


  const logoutRouter = async () => {
    await axios.get('/user/logout')
    localStorage.removeItem('firstLogin')
    window.location.href = "/";
  }

  const adminRouter = () => {
    return (
      <>
        <li className="nav-item"><Link to="/create_product" className="nav-link">Create Product</Link></li>
        <li className="nav-item"><Link to="/category" className="nav-link">Categories</Link></li>
      </>
    )
  }

  const loggedRouter = () => {
    return (
      <>
        <li className="nav-item"><Link to="/history" className="nav-link">History</Link></li>
        <li className="nav-item"><Link to="/" className="nav-link" onClick={logoutRouter}>Logout</Link></li>
      </>
    )
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {isAdmin ? 'Admin' : 'Tryouts'}
          <div className="circle"></div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/product" className="nav-link" >
                {isAdmin ? 'Products' : 'Shop'}
              </Link>
            </li>
            {isAdmin && adminRouter()}

            {
              isLogged ? loggedRouter() : isAdmin ? <li className="nav-item"><Link to="/" className="nav-link" onClick={logoutRouter}>Logout</Link></li> : <li className="nav-item"><Link to="/login" className="nav-link">Login ✥ Register</Link></li>
            }

            <li className="nav-item">
              {
                isAdmin ? ''
                  : <Link to="/cart" className="nav-link">
                    <div className="header-cart">
                      <div className="cart-number">{cart.length}</div>
                      <img src={cartsvg} style={{ "width": "30px", "height": "25px", "marginTop": "10px" }} />
                    </div>
                  </Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}
