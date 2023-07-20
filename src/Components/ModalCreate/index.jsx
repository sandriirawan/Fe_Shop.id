import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import axios from 'axios'
import { useDispatch } from "react-redux";
import createProduct from "../../Config/Redux/Action/createProductAction";


function ModalCreate() {

  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage]  = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name:"",
    stock:"",
    price:"",
    photo:"",
    description:""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(data,saveImage,setShow))
    
  };


  return (
    <>
    <button className="btn btn-success" onClick={handleShow}>
      Create
    </button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
      <Modal.Body>
      <input
            className="form-control mt-3"
            type="text"
            placeholder="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            className="form-control mt-3"
            type="text"
            placeholder="stock"
            name="stock"
            value={data.stock}
            onChange={handleChange}
          />
          <input
            className="form-control mt-3"
            type="text"
            placeholder="price"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
          <input
            className="form-control mt-3"
            type="file"
            placeholder="photo"
            name="photo"
            onChange={handleUpload}
          />
          <input
            className="form-control mt-3"
            type="text"
            placeholder="description"
            name="description"
            value={data.description}
            onChange={handleChange}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button type="submit" className="btn btn-primary">Create</button>
      </Modal.Footer>
      </form>
    </Modal>
  </>
  );
}

export default ModalCreate;


         