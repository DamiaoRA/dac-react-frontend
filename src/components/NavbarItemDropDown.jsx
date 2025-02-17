import { useState } from "react";
import { Link } from "react-router-dom";

function NavbarItemDropDown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" 
            onClick={() => {setIsOpen(!isOpen)}} 
            href="#"
            aria-haspopup={true}
            aria-expanded={isOpen}>Listar</a>
        {isOpen && (
        <div className="dropdown-menu show">
            <Link className="dropdown-item" to="/userlist" onClick={() => setIsOpen(false)}>Listar usuários</Link>
            <a className="dropdown-item" href="#" onClick={() => setIsOpen(false)}>Listar livros</a>
        </div>
        )}
    </li>
    );
};

export default NavbarItemDropDown;