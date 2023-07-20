import React, { useEffect } from 'react'
import stars from "../../Assets/img/category/stars.png"
import { useDispatch, useSelector } from "react-redux";
import getProduct from "../../Config/Redux/Action/productAction";
import { Link } from "react-router-dom";
import { animateScroll } from 'react-scroll';



function NewProduct() {
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state.product)
useEffect(() => {
  dispatch(getProduct());
}, [dispatch]);


const handleLinkClick = () => {
  animateScroll.scrollToTop();
};
  return (
    <>
    <section className="mt-5">
      <div className="container">
        <div className="container">
         <div className="row pb-3">
            <div className="col title">
              <h2 className="font-weight-bold">New</h2>
              <p>You've never seen before!</p>
            </div>
        </div>
        <div className="container">
      <div className="row">
        {product.map((product,) => (
          <div className="col-md-3 col-sm-6 mb-4">
            <Link to={`/myproduct/${product.id}`} onClick={handleLinkClick}>
            <div className="border rounded product">
              <img
                className=" img-fluid"
                src={product.photo}
                crossOrigin="anonymous"
                alt="cloth"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="p-2">
                <h5 className="card-title">{product.name}</h5>
                <h5 className="text-danger">{product.price ? `Rp.${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}` : 'Price not available'}
                </h5>
                <p>Zalora Cloth</p>
                <img src={stars} alt="stars" />
              </div>
            </div>
        </Link>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </section>
    {/* end new product */}
   
  </>
  
  )
}

export default NewProduct