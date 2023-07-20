import React from "react";
import Navbar from '../Components/Navbar';
import NavbarLogin from "../Components/NavbarLogin/NavbarLogin";
import Carousel from "../Components/Carousel"
import Category from "../Components/Category";
import NewProduct from "../Components/NewProduct";
import PopulerProduct from "../Components/PopulerProduct";




const Home = () => {
  const isLogin = localStorage.getItem('token');

if (!isLogin) {
  return (
    <>
      <header>
        <Navbar/>
        <Carousel/>
        <Category/>
        <NewProduct/>
        <PopulerProduct/>
      </header>
    </>
  );
} else {
  return (
    <>
      <header>
        <NavbarLogin />
        <Carousel/>
        <Category/>
        <NewProduct/>
        <PopulerProduct/>
      </header>
    </>
  );
}
};

export default Home;
