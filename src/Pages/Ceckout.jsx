import React from "react";
import NavbarLogin from '../Components/NavbarLogin/NavbarLogin'

function Ceckout() {

  return (
    <>
    <NavbarLogin/>
    <main id="checkout" className="mb-5">
  <div className="container mb-4">
    <h2 className="heading">Checkout</h2>
  </div>
  <section className="">
    <div className="container pt-3">
      <h5 className="sub-heading">Shipping Address</h5>
      <div className="row">
        <div className="col-lg-8 mb-md-4">
          <div className="card-wrapper align-content-center mb-3">
            <h5 className="sub-heading mb-3"> </h5>
            <p className="sub-address">

            </p>
            {/* Modal */}
            <a
              className="btn btn-address border-secondary rounded-pill text-secondary"
              data-toggle="modal"
              href="#chooseAnotherAddress"
              role="button"
            >
              Choose another address
            </a>
          </div>
          <ul className="list-checkouts">
            <li className="list-checkout mb-3">
              <div className="wrapper-product d-flex align-content-center justify-content-between">
                <div className="d-flex align-content-center">
                  <div className="wrapper-img-checkbox me-3 p-2">
                    <img
                      className="img-cart"
                      src="../assets/img/Mask Group.png"
                      alt=""
                    />
                  </div>
                  <div className="wrapper-desc pt-2 pl-2">
                    <h5 className="title-product mb-2">Men's formal suit</h5>
                    <p className="text-seller">Zalora Cloth</p>
                  </div>
                </div>
                <p className="price mb-0 pt-4 fw-bold">$ 20.0</p>
              </div>
            </li>
          </ul>
          <ul className="list-checkouts">
            <li className="list-checkout mb-3">
              <div className="wrapper-product d-flex align-content-center justify-content-between">
                <div className="d-flex align-content-center">
                  <div className="wrapper-img-checkbox me-3 p-2">
                    <img
                      className="img-cart"
                      src="../assets/img/Mask.png"
                      alt=""
                    />
                  </div>
                  <div className="wrapper-desc pt-2 pl-2">
                    <h5 className="title-product mb-2">Men's Jacket jeans</h5>
                    <p className="text-seller">Zalora Cloth</p>
                  </div>
                </div>
                <p className="price mb-0 pt-4 fw-bold">$ 20.0</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <div className="card-wrapper">
            <h5 className="title-heading mb-4">Shopping summary</h5>
            <ul className="list-shoppings">
              <li className="list-shopping mb-1">
                <div className="wrapper-shop d-flex justify-content-between">
                  <p className="sub-shopping">Order</p>
                  <span className="price">$ 40.0</span>
                </div>
              </li>
              <li className="list-shopping mb-1">
                <div className="wrapper-shop d-flex justify-content-between">
                  <p className="sub-shopping">Delivery</p>
                  <span className="price">$ 5.0</span>
                </div>
              </li>
            </ul>
            <hr />
            <div className="total-wrapper d-flex justify-content-between">
              <h5 className="sub-heading">Grand Total</h5>
              <span className="grand-total fw-bold mb-4">$ 45.0</span>
            </div>
            <button
              type="submit"
              className="btn btn-checkout"
              data-toggle="modal"
              data-target="#payment"
            >
              Select payment
            </button>
            {/* modal payment */}
            <div
              className="modal fade"
              id="payment"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex={-1}
              aria-labelledby="paymentLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="paymentLabel">
                      Payment
                    </h1>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <hr />
                  <div className="modal-body">
                    <div className="container-fluid">
                      <div className="row container-title">
                        <h5 className="fw-bold">Payment method</h5>
                      </div>
                      <div className="row">
                        <div className="col-12 p-0">
                          <ul className="list-payments mb-1">
                            <li className="list-payment d-flex justify-content-between">
                              <div className="wrapper-payment d-flex align-items-center">
                                <img
                                  className="icon-payment me-4"
                                  src="../assets/img/payment/Logo-GoPay-Vector-CDR-dan-PNG 1.png"
                                  alt="gopay"
                                />
                                <span className="payment-name">Gopay</span>
                              </div>
                              <input type="checkbox" name="" id="" />
                            </li>
                            <li className="list-payment d-flex justify-content-between">
                              <div className="wrapper-payment d-flex align-items-center">
                                <img
                                  className="icon-payment me-5"
                                  src="../assets/img/payment/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7 1.png"
                                  alt="Pos Indonesia"
                                />
                                <span
                                  className="payment-name"
                                  style={{ marginLeft: 43 }}
                                >
                                  Pos Indonesia
                                </span>
                              </div>
                              <input type="checkbox" name="" id="" />
                            </li>
                            <li className="list-payment d-flex justify-content-between">
                              <div className="wrapper-payment d-flex align-items-center">
                                <img
                                  className="icon-payment me-5"
                                  src="../assets/img/payment/mastercard.png"
                                  alt="mastercard"
                                />
                                <span className="payment-name ml-5">
                                  Master Card
                                </span>
                              </div>
                              <input type="checkbox" name="" id="" />
                            </li>
                          </ul>
                          <div className="list-payments pb-5">
                            <div className="container-fluid">
                              <div className="row container-title mt-2 mb-2">
                                <h5 className="mt-4 fw-bold">
                                  Shopping summary
                                </h5>
                              </div>
                              <div className="list-order d-flex justify-content-between">
                                <p className="sub-shopping">Order</p>
                                <span className="price">$ 40.0</span>
                              </div>
                              <div className="list-order d-flex justify-content-between">
                                <p className="sub-shopping">Delivery</p>
                                <span className="price">$ 5.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-between">
                    <div className="wrapper-total">
                      <h5 className="title-grand fw-bold">Total Payment</h5>
                      <span className="grand-total-font">$ 45.0</span>
                    </div>
                    <button type="button" className="btn-save">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End modal payment */}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  </>
  )
}

export default Ceckout