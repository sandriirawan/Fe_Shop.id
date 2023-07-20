import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Assets/CSS/style.css"
import profile from "../../Assets/img/profile/christian-buehner-DItYlc26zVI-unsplash 1.png"
import icon1 from "../../Assets/img/home.png"
import icon2 from "../../Assets/img/package 1.png"
import icon3 from "../../Assets/img/shopping-cart (3) 1.png"



function SidebarSeller() {
  const navigate = useNavigate();

  const myproduct = () => {
    navigate('/myproduct');
  };

  const [fullname, setFullname] = useState('');

  useEffect(() => {
    const storedFullname = localStorage.getItem('fullname');
    setFullname(storedFullname);
  }, []);


  return (
<>
  {/* side-bar */}
  <div className="sidebar w-25 d-flex">
    <div className="header">
      <div className="wrapper-img d-flex">
        <img
          className="profile-images"
          src={profile}
          alt=""
        />
        <div className="preferensi ms-3">
          <h6 className="mb-2 font-weight-bold">{fullname}</h6>
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
          <span className="description active ms-3">Store</span>{" "}
        </button>
      </div>
      <div className="list-item">
        <button>
          <img
            className="icon-profile bg-warning"
            src={icon2}
            alt=""
          />
          <span onClick={myproduct} className="description ms-3 active">Product</span>
        </button>
      </div>
      <div className="list-item">
        <button  className="description ms-3 ml-5">
          <span onClick={myproduct}>My Product</span>
        </button>
      </div>
      <div className="list-item">
        <button  className="description ms-3 ml-5">
          <span onClick={myproduct}>Selling Product</span>
        </button>
      </div>
      <div className="list-item">
        <button >
          <img
            className="icon-profile bg-danger"
            src={icon3}
            alt=""
          />
          <span className="description ms-3 active">Order</span>{" "}
        </button>
      </div>
    </div>
  </div>
</>
  )
}

export default SidebarSeller