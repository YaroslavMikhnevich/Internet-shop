import { Outlet, NavLink } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useState } from "react";


export default function Layout() {





    return (
        <>
            <Header />
            <div className="container">

                <Outlet />
            </div>
        </>
    )
}

