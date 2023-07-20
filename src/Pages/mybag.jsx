  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import getOrder from "../Config/Redux/Action/ordersAction";
  import NavbarLogin from "../Components/NavbarLogin/NavbarLogin";
  import getProduct from "../Config/Redux/Action/productAction";
  import deleteOrder from "../Config/Redux/Action/deleteOrderAction";
  import swal from "sweetalert";

  function MyBag() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order.order);
    const { product } = useSelector((state) => state.product);
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      dispatch(getOrder());
      dispatch(getProduct());
    }, [dispatch]);

    useEffect(() => {
      let sum = 0;
      order.forEach((orderItem) => {
        const productItem = product.find((p) => p.id === orderItem.product_id);
        if (productItem) {
          sum += orderItem.quantity * productItem.price;
        }
      });
      setTotalPrice(sum);
    }, [order, product]);

    const handleDelete = () => {
      if (selectedItems.length === 0) {
        return;
      }
      swal({
        title: "Are you sure?",
        text: "You are about to delete the selected items. This action cannot be undone.",
        icon: "warning",
        buttons: ["Cancel", "Delete"],
        dangerMode: true,
      }).then((confirmed) => {
        if (confirmed) {
          dispatch(deleteOrder(selectedItems));
          setSelectedItems([]);
          swal("Items deleted successfully", "", "success");
          window.location.reload();
        }
      });
    };

    const handleCheckboxChange = (event, orderId) => {
      const { checked } = event.target;
      setSelectedItems((prevItems) => {
        if (checked) {
          return [...prevItems, orderId];
        } else {
          return prevItems.filter((id) => id !== orderId);
        }
      });
    };

    const handleSelectAll = (event) => {
      if (event.target.checked) {
        const allOrderIds = order.map((item) => item.id);
        setSelectedItems(allOrderIds);
      } else {
        setSelectedItems([]);
      }
    };

    const isAllSelected = selectedItems.length === order.length;

    return (
      <>
        <NavbarLogin />
        <section id="cart">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title-categories font-weight-bold">My bag</h2>
              </div>
            </div>
            <div className="row">
              {/* side left */}
              <div className="col-lg-8 col-sm-12">
                {/* card sub*/}
                <div className="items card-checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                  />
                  <div className="select-btn-items">
                    <h6 className="btn-text">
                      Select all items <span />
                    </h6>
                    <button
                      className="btn btn-danger"
                      onClick={handleDelete}
                      disabled={selectedItems.length === 0}
                    >
                      <i className="bi bi-trash" />
                    </button>
                  </div>
                </div>
                {/* list product */}
                {order.map((orderItem) => {
                  const productItem = product.find(
                    (p) => p.id === orderItem.product_id
                  );
                  const isChecked = selectedItems.includes(orderItem.id);

                  const handleQuantityDecrease = () => {
                    if (orderItem.quantity > 1) {
                      orderItem.quantity -= 1;
                      setTotalPrice(
                        (prevTotalPrice) => prevTotalPrice - productItem.price
                      );
                    }
                  };

                  const handleQuantityIncrease = () => {
                    orderItem.quantity += 1;
                    setTotalPrice(
                      (prevTotalPrice) => prevTotalPrice + productItem.price
                    );
                  };
                  return (
                    <div className="product card-checkbox" key={orderItem.id}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={isChecked}
                        onChange={(event) =>
                          handleCheckboxChange(event, orderItem.id)
                        }
                      />
                      <div className="wrapper-product">
                        <div className="wrapper-img">
                          <img
                            className="img-cart"
                            src={productItem?.photo}
                            alt=""
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="wrapper-desc">
                          <h5 className="title-product">{productItem?.name}</h5>
                          <p className="text-seller">Zalora Cloth</p>
                        </div>
                        <div className="product-qty">
                          <button
                            className="btn-mines"
                            onClick={handleQuantityDecrease}
                          >
                            <i className="bi bi-dash-lg" />
                          </button>
                          <span className="qty ms-2 me-2 p-1">
                            {orderItem.quantity}
                          </span>
                          <button
                            className="btn-plus"
                            onClick={handleQuantityIncrease}
                          >
                            <i className="bi bi-plus-lg" />
                          </button>
                        </div>
                        <h6 className="price font-weight-bold">
                          Rp
                          {(
                            productItem?.price * orderItem.quantity
                          ).toLocaleString()}
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* side right */}
              <div className="col-lg-4 mt-lg-0">
                <div className="card-form-summary">
                  <div className="row ">
                    <div className="col-12">
                      <h5 className="title-sumarry font-weight-bold">
                        Shopping summary
                      </h5>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <p className="text-total">Total Price</p>
                    </div>
                    <div className="col-6 text-end">
                      <h6 className="total-price font-weight-bold">
                        Rp{totalPrice.toLocaleString()}
                      </h6>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <button type="submit" className="btn btn-buy">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default MyBag;
