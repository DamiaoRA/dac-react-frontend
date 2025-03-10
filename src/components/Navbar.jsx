import NavbarItem from "./NavbarItem";
import React, { useState } from "react";
import NavbarItemDropDown from "./NavbarItemDropDown";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { logout } = useAuth();
    const { userRoles } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
      console.log('logout--')
      logout();
      navigate("/");
    };

    return (
      <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Minha Aplicação</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <NavbarItem href="/home" label="Home"/>
                    {userRoles?.includes("ROLE_ADMIN","ROLE_MANAGER") && <NavbarItem href="/createUser" label="Cadastro"/>}
                    <NavbarItemDropDown />
                    <li className="nav-item">
                        <Link className="nav-link" onClickCapture={handleLogout}>Sair</Link>
                    </li>
                    {/* <NavbarItem href="/" label="Sair"/> */}
                </ul>
            </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;