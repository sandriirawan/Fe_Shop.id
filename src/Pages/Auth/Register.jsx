import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/img/logo.png";
import axios from 'axios';
import swal from 'sweetalert';



function Register() {
  const Naviigate = useNavigate();

  let [data, setData] = useState({
    fullname:'',
    email:"",
    passwordHash:"",
    role:"",
    phone:"",
    store_name:"",
  });

  let onChange = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
    console.log(data)
  };

  const handleRoleClick = (selectedRole) => {
    setData((prevData) => ({
      ...prevData,
      role: selectedRole
    }));
  };

  let oneClick = (e) =>{
  const { fullname, email, password, phone, store_name } = data;
  if (fullname === "" || email === "" || password === "" || phone === "" || store_name === "") {
    swal({
      title: "register failed",
      text: 'You clicked the button!',
      icon: 'error',
      button: 'OK',
    });
    return;
  }

    axios.post(`${process.env.REACT_APP_API_KEY}/users/register`,data)
    .then((result) => {
      swal({
        title: "Register Success",
        text: "You have successfully registered!",
        icon: "success",
        button: "OK",
      }).then(() => {
        Naviigate("/login"); 
      });
    }).catch((err) => {
        console.log(err)
          swal({
          title: "login error",
          text: 'You clicked the button!',
          icon: 'error',
          button: 'OK',
        }).then(() => {
          window.location.reload(); 
        });

    });
  }
  return (
    <main id="register">
      <div className="container">
        <img src={logo} alt="logo" />
        <h6 className="text-center py-3 font-weight-bold">
          Please sign up with your account
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
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            {/* customer */}
            <form>
              <div className="form-group">
                <input
                  name="fullname"
                  className="form-control"
                  placeholder="Name"
                  type="text"
                  onChange={onChange}
                />
              </div>
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
                <button type="button" onClick={oneClick} className="btn btn-block rounded-pill">
                  <h6 className="register">SIGN UP</h6>
                </button>
              </div>
            </form>
            <h6 className="text-regis">
              Already have shop.id account?
              <Link to="/login">Login</Link>
            </h6>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {/* seller */}
            <form>
              <div className="form-group">
                <input
                  name="fullname"
                  className="form-control"
                  placeholder="Name"
                  type="text"
                  onChange={onChange}
                />
              </div>
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
                  name="phone"
                  className="form-control"
                  placeholder="Phone number"
                  type="Numeric "
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="store_name"
                  className="form-control"
                  placeholder="Store name"
                  type="text"
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
                <button type="button" onClick={oneClick} className="btn btn-block rounded-pill">
                  <h6 className="register">SIGN UP</h6>
                </button>
              </div>
            </form>
            <h6 className="text-regis">
              Already have a shop.id account?
              <Link to="/login">Login</Link>
            </h6>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
