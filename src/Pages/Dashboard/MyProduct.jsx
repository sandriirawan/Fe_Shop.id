import React, { useEffect, useState } from 'react';
import NavbarLogin from '../../Components/NavbarLogin/NavbarLogin';
import SidebarSeller from '../../Components/SidebarSeller';
import { Link } from "react-router-dom";
import ModalCreate from '../../Components/ModalCreate';
import ModalUpdate from '../../Components/ModalUpdate';
import ModalDelete from '../../Components/ModalDelete';
import { useDispatch, useSelector } from "react-redux";
import getProduct from "../../Config/Redux/Action/productAction";

function MyProduct() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Jumlah produk yang ingin ditampilkan per halaman
  const [sortOrder, setSortOrder] = useState("asc"); // Urutan pengurutan, default ascending

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    const filtered = product.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchTerm ? filteredProducts : product;
  const sortedProducts = sortOrder === "asc" ? currentProducts.slice().sort((a, b) => a.id - b.id) : currentProducts.slice().sort((a, b) => b.id - a.id);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  return (
    <>
      <NavbarLogin />
      <div className="container-fluid p-0 d-flex align-items-start vh-100">
        <SidebarSeller />
        <div className="main-content vh-100">
          <div className="container">
            <div className="wrapper-card"
              style={{
                height: "700px",
              }}
            >
              <h3 className="title mb-0 text-danger">Item details</h3>
              <hr className="mb-4 bg-danger" />
              <input
                className="form-control input mb-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">
                      <button
                        className="btn btn-link btn-sm"
                        onClick={toggleSortOrder}
                      >
                        {sortOrder === "asc" ? (
                          <i className="bi bi-arrow-down"></i>
                        ) : (
                          <i className="bi bi-arrow-up"></i>
                        )}
                      </button>
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Description</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Update</th>
                    <th scope="col">Deleted</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedProducts
                    .slice(indexOfFirstProduct, indexOfLastProduct)
                    .map((product, index) => (
                      <tr key={product.id} className=".text-center">
                        <th scope="row">
                          {indexOfFirstProduct + index + 1}
                        </th>
                        <td>{product.name}</td>
                        <td>{product.stock}</td>
                        <td>
                          {product.price
                            ? `Rp.${product.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                            : 'Price not available'}
                        </td>
                        <td>
                          <img
                            src={product.photo}
                            alt=""
                            crossOrigin="anonymous"
                            style={{ width: "50px" }}
                          />
                        </td>
                        <td>{product.description}</td>
                        <td>
                          <Link to={`${product.id}`}>
                            <button type="button" className="btn btn-info">
                              <i className="bi bi-search-heart-fill"></i>
                            </button>
                          </Link>
                        </td>
                        <td>
                          <ModalUpdate
                            id={product.id}
                            name={product.name}
                            stock={product.stock}
                            price={product.price}
                            description={product.description}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </ModalUpdate>
                        </td>
                        <td>
                          <ModalDelete id={product.id}>
                            <i className="bi bi-trash"></i>
                          </ModalDelete>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="pagination">
                <ul className="pagination">
                  {totalPages > 1 &&
                    Array(totalPages)
                      .fill()
                      .map((_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link "
                            onClick={() => paginate(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                </ul>
              </div>
              <ModalCreate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProduct;
