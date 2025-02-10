import NavbarItem from "./NavbarItem";
import React from "react";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Minha Aplicação</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <NavbarItem href="/home" label="Home"/>
                    <NavbarItem href="/createUser" label="Cadastro"/>
                    <NavbarItem href="#" label="Listar"/>
                    <NavbarItem href="/" label="Sair"/>
                </ul>
            </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;