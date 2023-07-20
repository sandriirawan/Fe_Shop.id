import React from 'react'
import profile from "../../Assets/img/profile/profile.png"
import "../../Assets/CSS/style.css"

function mainCustomer() {
  return (
    <>
  {/* main content */}
  <div className="main-content vh-100">
    <div className="container">
      <div className="wrapper-card">
        <h3 className="title mb-0">My Profile</h3>
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
              <fieldset className="row mb-3">
                <label
                  htmlFor="name"
                  className="col-sm-3 col-form-label text-end"
                >
                  Gender
                </label>
                <div className="col-sm-7 d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="laki-laki"
                      defaultValue="option1"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      {" "}
                      Laki - laki{" "}
                    </label>
                  </div>
                  <div className="form-check ml-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="laki-laki"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      {" "}
                      Perempuan{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
            <form className="row gx-3 gy-2 align-items-center">
              <label
                htmlFor="name"
                className="col-sm-3 col-form-label text-end"
              >
                Data Of Bith
              </label>
              <div className="col-sm-3">
                <select className="form-select" id="day">
                  <option selected="">Date</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={30}>30</option>
                  <option value={31}>31</option>
                </select>
              </div>
              <div className="col-sm-3">
                <select className="form-select" id="day">
                  <option selected="">Month</option>
                  <option value={1}>Januari</option>
                  <option value={2}>Februari</option>
                  <option value={3}>Maret</option>
                  <option value={4}>April</option>
                  <option value={5}>Mei</option>
                  <option value={6}>Juni</option>
                  <option value={7}>Juli</option>
                  <option value={8}>Agustus</option>
                  <option value={9}>September</option>
                  <option value={10}>Oktober</option>
                  <option value={11}>November</option>
                  <option value={12}>Desember</option>
                </select>
              </div>
              <div className="col-sm-3">
                <select className="form-select" id="day">
                  <option selected="">Year</option>
                  <option value={1}>1990</option>
                  <option value={2}>1991</option>
                  <option value={3}>1992</option>
                  <option value={4}>1993</option>
                  <option value={5}>1994</option>
                  <option value={6}>1995</option>
                  <option value={7}>1996</option>
                  <option value={8}>1997</option>
                  <option value={9}>1998</option>
                  <option value={10}>1999</option>
                  <option value={11}>2000</option>
                  <option value={12}>2001</option>
                </select>
              </div>
            </form>
            <div className="contaner" />
            <button type="submit" className="btn btn-save mt-5 ml-5">
              Save
            </button>
          </div>
          <div className="col-lg-4 border-left text-center">
            <img
              className="preview-profile-img"
              src={profile}
              alt=""
            />
            <div className="mb-3 upload-img mt-4">
              <label htmlFor="uploadImages" className="form-label">
                <btn className="btn-upload">Upload</btn>
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

export default mainCustomer