import React from 'react'
import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import Home from '../../Pages/home';
import Page404 from '../../Pages/page404';
import MyBag from '../../Pages/mybag';
import Login from '../../Pages/Auth/Login';
import Register from '../../Pages/Auth/Register';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import MyProduct from '../../Pages/Dashboard/MyProduct';
import DetailProduct from '../../Pages/Dashboard/DetailProduct';
import Ceckout from '../../Pages/Ceckout';



const Router = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mybag" element={<MyBag/>} />
          <Route path="/ceckout" element={<Ceckout/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/myproduct" element={<MyProduct/>} />
          <Route path="/myproduct/:id" element={<DetailProduct/>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router