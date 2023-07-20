import React, { useEffect, useState } from 'react';
import logo from '../../Assets/img/logo.png';
import '../../App.css';
import { useNavigate, Link } from 'react-router-dom';
import Logout from '../HandleLogout';
import color1 from '../../Assets/img/colors/Ellipse 5.png';
import color2 from '../../Assets/img/colors/Ellipse 6.png';
import color3 from '../../Assets/img/colors/Ellipse 7.png';
import color4 from '../../Assets/img/colors/Ellipse 8.png';
import color5 from '../../Assets/img/colors/Ellipse-3.png';
import color6 from '../../Assets/img/colors/Ellipse-1.png';
import { useDispatch, useSelector } from 'react-redux';
import getProduct from '../../Config/Redux/Action/productAction';

function NavbarLogin() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    const results = product.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  };

  // nacigate
  const navigate = useNavigate();
  const home = () => {
    navigate('/home');
  };
  const cart = () => {
    navigate('/mybag');
  };
  const dashboard = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <header id="navbar">
        {/* navbar */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <img onClick={home} className="logo" src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <input
                  className="form-control input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </li>
            </ul>
            {/* <i className="search bi bi-search" /> */}
            {/* icon */}
            <form className="form-inline">
              {/* icon modal filter */}
              <button
                className="btn"
                type="button"
                data-toggle="modal"
                data-target="#filter"
              >
                <i className="filter bi bi-funnel" />
              </button>
              <i className="cart bi bi-cart" onClick={cart} />
              <i className="bell bi bi-bell " />
              <i className="massage bi bi-envelope-heart" />
              <i className="profile bi bi-person-circle" onClick={dashboard} />
              <Logout />
            </form>
            {/* end icon */}
          </div>
        </nav>
        {/* End navbar */}
      </header>

      {/* icon modal filter */}
      <div
        className="modal fade"
        id="filter"
        tabIndex={-1}
        aria-labelledby="filterLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="filterLabel">
                Filter
              </h1>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container mb-1">
                <div className="row">
                  <div className="col-12">
                    <span className="text-color">Colors</span>
                    <div className="color-pallets d-flex pt-3">
                      <button
                        type="button"
                        className="btn btn-color"
                        data-toggle="button"
                      >
                        <img className="color" src={color1} alt="" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-color"
                        data-toggle="button"
                      >
                        <img className="color" src={color2} alt="" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-color"
                        data-toggle="button"
                      >
                        <img className="color" src={color3} alt="" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-color"
                        data-toggle="button"
                      >
                        <img className="color" src={color4} alt="" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-color"
                        data-toggle="button"
                      >
                        <img className="color" src={color5} alt="" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-color"
                        data-toggle="button"
                      >
                        <img className="color" src={color6} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mb-1">
                <div className="row">
                  <div className="col-12">
                    <span className="text-color">Sizes</span>
                    <div className="size-charts d-flex pt-3">
                      <button
                        type="button"
                        className="btn btn-size"
                        data-toggle="button"
                      >
                        <span className="text-size text-center">XS</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-size"
                        data-toggle="button"
                      >
                        <span className="text-size text-center">S</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-size"
                        data-toggle="button"
                      >
                        <span className="text-size text-center">M</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-size active"
                        data-toggle="button"
                      >
                        <span className="text-size text-center">L</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-size"
                        data-toggle="button"
                      >
                        <span className="text-size text-center">XL</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mb-1">
                <div className="row">
                  <div className="col-12">
                    <span className="text-color">Category</span>
                  </div>
                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button
                        type="button"
                        className="btn btn-category"
                        data-toggle="button"
                      >
                        <span className="text-categories text-center">All</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button
                        type="button"
                        className="btn btn-category"
                        data-toggle="button"
                      >
                        <span className="text-categories text-center">Woman</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button
                        type="button"
                        className="btn btn-category"
                        data-toggle="button"
                      >
                        <span className="text-categories text-center">Man</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button
                        type="button"
                        className="btn btn-category"
                        data-toggle="button"
                      >
                        <span className="text-categories text-center">Boys</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="list-categories d-flex pt-3">
                      <button
                        type="button"
                        className="btn btn-category"
                        data-toggle="button"
                      >
                        <span className="text-categories text-center">Girls</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mb-1">
                <div className="row">
                  <div className="col-12">
                    <span className="text-color">Brand</span>
                    <select className="form-select" aria-label="Default select example">
                      <option defaultValue="Adidas Originals, Jack &amp; Jones, S.Oliver">
                        Adidas Originals, Jack &amp; Jones, S.Oliver
                      </option>
                      <option value={1}>Adidas Originals</option>
                      <option value={2}>Jack &amp; Jones</option>
                      <option value={3}>S.Olive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn btn-discard" data-dismiss="modal">
                      Discard
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-apply">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-container">
        {searchResults.map((item) => (
          <div key={item.id} className="product-info">
            <div className="product-image-container">
              <img
                src={item.photo}
                alt={item.name}
                className="product-image"
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price font-weight-bold text-danger">
                {item.price
                  ? `Rp.${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
                  : 'Price not available'}
              </p>
              <h6 className="product-stock">Stock:{item.stock}</h6>
              <h6 className="product-description font-weight-bold">{item.description}</h6>
              <Link to={`/myproduct/${item.id}`}>
                <button className="btn btn-primary">Beli Sekarang</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NavbarLogin;
