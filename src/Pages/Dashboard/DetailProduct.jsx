import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopulerProduct from "../../Components/PopulerProduct";
import NavbarLogin from "../../Components/NavbarLogin/NavbarLogin";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProductDetail from "../../Config/Redux/Action/getDetailProduct";
import createOrder from "../../Config/Redux/Action/createOrderAction";

function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { productDetail } = useSelector((state) => state.product);
  console.log(productDetail.name);

  // size
  const [size, setSize] = useState("XS");
  const decreaseSize = () => {
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
    const currentIndex = sizeOptions.indexOf(size);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    setSize(sizeOptions[newIndex]);
  };
  const increaseSize = () => {
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
    const currentIndex = sizeOptions.indexOf(size);
    const newIndex =
      currentIndex < sizeOptions.length - 1 ? currentIndex + 1 : currentIndex;
    setSize(sizeOptions[newIndex]);
  };

  // qty
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const handleOrder = async () => {
    try {
      const orderData = {
        product_id: productDetail.id,
        quantity: quantity,
        order_date: new Date().toISOString(),
        product_size: size,
        users_id: localStorage.getItem("user_id"),
      };
      dispatch(createOrder(orderData));
    } catch (error) {
      console.error(error);
      alert("Failed to create order");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login"); // Redirect to the login page if the user is not logged in
    }
  }, [navigate]);
  return (
    <>
      <NavbarLogin />
      <main id="detailProduct">
        <div className="container">
          {/* breadcrumb */}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="./home.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              category
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              T-shirt
            </li>
          </ol>
          {/*  End breadcrumb */}
        </div>
        <section className="detailProduct">
          <div className="container">
            <div className="row">
              {/* Main Image */}
              <div className="col-lg-5 col-xl-4 col-md-5 col-sm-12">
                <div className="card w-100">
                  <img
                    src={productDetail.photo}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 mt-sm-0">
                {/* judul */}
                <div className="wrapper-column">
                  <h1 className="title-detail">{productDetail.name}</h1>
                  <span className="title-store">Zalora Cloth</span>
                  {/* review */}
                  <div className="review d-flex align-items-center">
                    <ul className="stars d-flex align-items-center">
                      <li className="list-star">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-star">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                    </ul>
                    <p className="review-title">(10)</p>
                  </div>
                  {/* price */}
                  <div className="price mt-lg-2">
                    <p className="title-color">Price</p>
                    <p className="price-detail ">
                      {productDetail.price
                        ? `Rp.${productDetail.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                        : "Price not available"}
                    </p>
                  </div>
                  {/* color */}
                  <div className="color">
                    <span className="title-color">
                      stock :{productDetail.stock}
                    </span>
                  </div>
                  {/* size */}
                  <div className="wrapper-detail d-flex align-items-center mt-4">
                    <div className="wrapper-size">
                      <span className="title-detail-size">Size</span>
                      <div className="counter-size mt-2">
                        <button className="btn-mines" onClick={decreaseSize}>
                          <i className="bi bi-dash-lg" />
                        </button>
                        <span className="qty-size ms-2 me-2 p-1">{size}</span>
                        <button className="btn-plus" onClick={increaseSize}>
                          <i className="bi bi-plus-lg" />
                        </button>
                      </div>
                    </div>
                    {/* jumlah */}
                    <div className="wrapper-total">
                      <span className="title-detail-size">Jumlah</span>
                      <div className="counter-total mt-2">
                        <button
                          className="btn-mines"
                          onClick={decreaseQuantity}
                        >
                          <i className="bi bi-dash-lg" />
                        </button>
                        <span className="qty ms-2 me-2 p-1">{quantity}</span>
                        <button className="btn-plus" onClick={increaseQuantity}>
                          <i className="bi bi-plus-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* button */}
                  <div className="row button-cta mt-lg-5 pt-4">
                    <div className="col-4 p-1 ">
                      <button type="submit" className="btn btn-chat " href="">
                        Chat
                      </button>
                    </div>
                    <div className="col-4 p-1">
                      <button
                        type="submit"
                        className="btn btn-add  "
                        onClick={handleOrder}
                      >
                        Add Bag
                      </button>
                    </div>
                    <div className="col-4 p-1">
                      <button
                        type="submit"
                        className="btn btn-buy "
                        onClick={handleOrder}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end button */}
        </section>
        <section className="informasiProduct">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="title-informasi ">Informasi Produk</h3>
              </div>
            </div>
            <h5 className="title-kondisi ">Condition</h5>
            <span className="status">New</span>
            <div className="container">
              <div className="row">
                <div className="description mt-4">
                  <h5 className="title-description">Description</h5>
                  <p className="desc-paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi, delectus!
                  </p>
                  <p
                    className="desc-paragraph"
                    style={{ textAlign: "justify" }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi possimus neque voluptatibus perferendis incidunt earum
                    assumenda atque eius tenetur? Culpa eos asperiores
                    similique! Sunt doloribus accusamus harum corporis ad
                    consequatur illo est aliquam natus hic et nesciunt dolorem
                    sed, quidem, facilis, cumque maxime obcaecati laudantium
                    nihil! Fuga quas blanditiis laudantium, ipsa minima vero?
                    Repudiandae, fuga aspernatur mollitia molestias molestiae
                    officiis provident eaque impedit atque quo sapiente nulla
                    beatae eligendi! Sed nobis sit officiis obcaecati autem
                    similique reiciendis facere rerum consectetur, corrupti
                    eaque vel deserunt sunt. Architecto laudantium at saepe
                    laboriosam iste, ad iure alias nulla, odit porro, natus
                    suscipit corrupti.
                  </p>
                  <p className="desc-paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore, ea assumenda vitae quis sunt odio possimus?
                    Laudantium voluptas qui ratione eos ullam accusamus
                    blanditiis magnam?
                  </p>
                  <p className="desc-paragraph mb-0">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="productReview">
          <div className="container">
            <div className="row-cols-1">
              <h3 className="title-informasi mt-1">Product review</h3>
              <div className="totalReview d-flex align-items-start mt-5">
                <div className="rate">
                  <div className="rate-count d-flex align-items-center">
                    <h1 className="product-rate me-1">5.0</h1>
                    <span className="per">/5</span>
                  </div>
                  <div className="rate-sta mt-1">
                    <ul className="list-retes d-flex align-items-center">
                      <li className="list-rate">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-rate ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-rate">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-rate">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                      <li className="list-rate">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="rgba(255, 186, 73, 1)"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rate-rating ms-5 ml-4 ">
                  <ul className="rate-ratings mb-0">
                    <li className="rate-list d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="rgba(255, 186, 73, 1)"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="fix-rate ms-2 p-0">5</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          aria-label="rate"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="fix-rate">4</p>
                    </li>
                    <li className="rate-list d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="rgba(255, 186, 73, 1)"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="fix-rate ms-2 p-0">4</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-light"
                          role="progressbar"
                          aria-label="rate"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="fix-rate">0</p>
                    </li>
                    <li className="rate-list d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="rgba(255, 186, 73, 1)"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="fix-rate ms-2 p-0">3</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-light"
                          role="progressbar"
                          aria-label="rate"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="fix-rate">0</p>
                    </li>
                    <li className="rate-list d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="rgba(255, 186, 73, 1)"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="fix-rate ms-2 p-0 ">2</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-light"
                          role="progressbar"
                          aria-label="rate"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="fix-rate">0</p>
                    </li>
                    <li className="rate-list d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="rgba(255, 186, 73, 1)"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="fix-rate ms-2 p-0">1</p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-light"
                          role="progressbar"
                          aria-label="rate"
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="fix-rate">0</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-5">
          <hr />
        </div>
        <PopulerProduct />
      </main>
    </>
  );
}

export default DetailProduct;

