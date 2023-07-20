import React from 'react'
import NavbarLogin from '../../Components/NavbarLogin/NavbarLogin';
import SidebarSeller from '../../Components/SidebarSeller/index';
import SidebarCustomer from '../../Components/SidebarCustomer/index';
import MainSeller from "../../Components/MainSeller/index"
import MainCustomer from "../../Components/MainCustomer/index"




function Dashboard() {

    const isSeller = localStorage.getItem('role');

    if (isSeller === 'seller'){
    return (
        <>
        <NavbarLogin/>
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
        <SidebarSeller/>
        <MainSeller/>
        </div>
        </>
  );
} else{
    return(
        <>
        <NavbarLogin/>
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
      <SidebarCustomer/>
      <MainCustomer/>
      </div>
      </>
    );
}
}

export default Dashboard