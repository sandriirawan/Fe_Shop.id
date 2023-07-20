import React from 'react'
import "../../App.css"
import logo from '../../Assets/img/logo.png';
import cart from '../../Assets/img/cart.png';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  const register = () => {
    navigate('/register');
  };

  return (
    <>
    <header id="navbar-index">
    {/* navbar */}
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light p-3">
      <img className="logo-shopid" src={logo} alt="logo" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon col-md-4" />
      </button>
      <div
        className="collapse navbar-collapse pl-4 ml-5"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <input
              className="form-control mr-2 input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <img className="mr-4" src={cart} alt="cart" />
          <button 
          className="text-login btn rounded-pill mr-2"
          onClick={login}
          >
            Login
          </button>
          <button 
          className="text-register btn rounded-pill "
          onClick={register}
          >
            Signup
          </button>
        </form>
      </div>
    </nav>
    {/* end navbar */}
    </header>
  </>
  )
}

export default Navbar