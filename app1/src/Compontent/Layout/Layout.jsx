import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Layout(){
    return <>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
    </>
}