import React from 'react'
import "../../Assets/CSS/style.css"
import profile from "../../Assets/img/profile/christian-buehner-DItYlc26zVI-unsplash 1.png"
import icon1 from "../../Assets/img/profile/user 1.png"
import icon2 from "../../Assets/img/profile/map-pin (3) 1.png"
import icon3 from "../../Assets/img/profile/clipboard 1.png"




function sidebarCustomer() {
  return (
    <>
    {/* side-bar */}
    <div className="sidebar vh-100 w-25 d-flex">
      <div className="header">
        <div className="wrapper-img d-flex">
          <img
            className="profile-images"
            src={profile}
            alt=""
          />
          <div className="preferensi ms-3">
            <p className="mb-2 font-weight-bold">Johanes Mikael</p>
            <span>
              <i className="bi bi-pencil-fill me-2" />
              <span>Ubah profile</span>
            </span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="list-item">
          <button>
            <img
              className="icon-profile bg-primary"
              src={icon1}
              alt=""
            />
            <span className="description active ms-3">My account</span>{" "}
          </button>
        </div>
        <div className="list-item">
          <button>
            <img
              className="icon-profile bg-warning"
              src={icon2}
              alt=""
            />
            <span className="description ms-3">Shipping Address</span>{" "}
          </button>
        </div>
        <div className="list-item">
          <button>
            <img
              className="icon-profile bg-danger"
              src={icon3}
              alt=""
            />
            <span className="description ms-3">My Order</span>{" "}
          </button>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default sidebarCustomer