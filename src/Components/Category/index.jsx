import React from 'react'
import category1 from "../../Assets/img/category/category-jacket.png"
import category2 from "../../Assets/img/category/category-pants.png"
import category3 from "../../Assets/img/category/category-shorts.png"
import category4 from "../../Assets/img/category/category-t-shirt.png"


function Category() {
  return (
    <>
    <div className="container mt-5">
      <div className="row pb-3">
        <div className="col title">
          <h2 className="font-weight-bold">Category</h2>
          <p className="">What are you currently looking for?</p>
        </div>
      </div>
      <div className="row category">
        <div className="col-md-3 col-sm-6 col-12 mb-5">
          <img
            className="img-category"
            src={category1}
            alt="pants"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-5">
          <img
            className="img-category"
            src={category2}
            alt="jacket"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-5">
          <img
            className="img-category"
            src={category3}
            alt="shorts"
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12 mb-5">
          <a href="t-shirt.html">
            <img
              className="img-category"
              src={category4}
              alt="t-shirt"
            />
          </a>
        </div>
      </div>
    </div>
    {/* end category */}
  </>
  
  )
}

export default Category