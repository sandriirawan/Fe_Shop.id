import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/img/logo.png";
import axios from "axios";
import swal from 'sweetalert';

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleClick = (selectedRole) => {
    setData((prevData) => ({
      ...prevData,
      role: selectedRole
    }));
  };

  const oneClick = (e) => {
    e.preventDefault();
    if (data.role !== "customer" && data.role !== "seller") {
      swal({
        title: "error",
        text: 'Invalid role',
        icon: 'error',
        button: 'OK',
      });
      return;
    }

  
  if (data.email === "" || data.password === "") {
    swal({
      title: "error",
      text: 'You clicked the button!',
      icon: 'error',
      button: 'OK',
    });
    return; 
  }

    axios
      .post(`${process.env.REACT_APP_API_KEY}/users/login`, data)
      .then((result) => {
        navigate("/home"); 
        localStorage.setItem('token', result.data.data.token);
        localStorage.setItem('role', result.data.data.role);
        localStorage.setItem('fullname', result.data.data.fullname);
        swal({
          title: "login succed",
          text: 'You clicked the button!',
          icon: 'success',
          button: 'OK',
        });
      
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: "login error",
          text: 'You clicked the button!',
          icon: 'error',
          button: 'OK',
        }).then(() => {
          window.location.reload(); 
        });
      });
  };

  return (
    <main id="login">
      <div className="container">
        <img src={logo} alt="logo" />
        <h6 className="text-center py-3 font-weight-bold">
          Please login with your account
        </h6>
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              data-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => handleRoleClick("customer")}
            >
              Customer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              data-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => handleRoleClick("seller")}
            >
              Seller
            </button>
          </li>
        </ul>
        {/* seller */}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <form>
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <h6 className="link float-right py-3 ">Forgot password?</h6>
                {/* {isLoginError && (
                  <p className="error-message" style={{ color: "red" }}>
                    Invalid email or password. Please try again.
                  </p>
                )} */}
                <button
                type="button"
                  onClick={oneClick}
                  className="btn btn-block rounded-pill"
                >
                  <h6 className="login">LOGIN</h6>
                </button>
              </div>
            </form>
            <h6 className="text-regis">
              Don't have a shop.id account?
              <Link to="/register">Register</Link>
            </h6>
          </div>
          {/* customer */}
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <form>
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <h6 className="link float-right py-3 ">Forgot password?</h6>
                {/* {isLoginError && (
                  <p className="error-message" style={{ color: "red" }}>
                    Invalid email or password. Please try again.
                  </p>
                )} */}
                <button
                type="button"
                  onClick={oneClick}
                  className="btn btn-block rounded-pill"
                >
                  <h6 className="login">LOGIN</h6>
                </button>
              </div>
            </form>
            <h6 className="text-regis">
              Don't have a shop.id account?
              <Link to="/register">Register</Link>
            </h6>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
