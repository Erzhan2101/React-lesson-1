import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="box-header">
                    <Logo />
                    <NavBar />
                </div>
            </div>
        </div>
    )
}

export default Header