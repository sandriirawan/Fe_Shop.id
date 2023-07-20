import { useState } from 'react';
// import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import updateProduct  from "../../Config/Redux/Action/updateProductAction"
import swal from 'sweetalert';


function ModalUpdate({id, name, stock, price, photo, description, children}) {

  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage]  = useState(photo);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name,
    stock,
    price,
    photo,
    description,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(data,id,saveImage,setShow))
    swal({
      title: "update succed",
      text: 'You clicked the button!',
      icon: 'success',
      button: 'OK',
    }).then(() => {
      window.location.reload(); 
    });
  };


  return (
    <>
    <Button className="btn btn-warning" onClick={handleShow}>
    {children}
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title >Update Product</Modal.Title>
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
        <button type="submit" className="btn btn-warning">{children}</button>
      </Modal.Footer>
      </form>
    </Modal>
  </>
  );
}

export default ModalUpdate;


         