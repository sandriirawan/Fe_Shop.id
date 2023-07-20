import React from 'react'
import profile from "../../Assets/img/profile/profile.png"
import "../../Assets/CSS/style.css"




function mainSeller() {
  return (
    <>
  {/* main content */}
  <div className="main-content vh-100">
    <div className="container">
      <div className="wrapper-card">
        <h3 className="title mb-0">My profile store</h3>
        <span className="sub-title">Manage your profile information</span>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-lg-8">
            <form>
              <div className="row mb-3">
                <label
                  htmlFor="name"
                  className="col-sm-3 col-form-label text-end"
                >
                  Name
                </label>
                <div className="col-sm-7">
                  <input type="name" className="form-control" id="name" />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="email"
                  className="col-sm-3 col-form-label text-end"
                >
                  Email
                </label>
                <div className="col-sm-7">
                  <input type="email" className="form-control" id="email" />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="phone-number"
                  className="col-sm-3 col-form-label text-end"
                >
                  Phone Number
                </label>
                <div className="col-sm-7">
                  <input
                    type="phone-number"
                    className="form-control"
                    id="phone-number"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="description"
                  className="col-sm-3 col-form-label text-end "
                >
                  Store description
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control p-5"
                    id="description"
                  />
                </div>
              </div>
              <div className="contaner" />
              <button type="submit" className="btn btn-save mt-5 ml-5">
                Save
              </button>
            </form>
          </div>
          <div className="col-lg-4 border-left text-center">
            <img
              className="preview-profile-img"
              src={profile}
              alt=""
            />
            <div className="mb-3 upload-img mt-4">
              <label htmlFor="uploadImages" className="form-label">
                <btn className="btn-upload">Upload </btn>
              </label>
              <input className="form-control" type="file" id="uploadImages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default mainSeller