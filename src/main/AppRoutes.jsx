import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../screens/login/Login";
import CreateUser from "../screens/createUser/CreateUser";
import Home from "./Home";
import MainLayout from "./MainLayout";

function AppRoutes() {
    return (
        <Router basename='/dac-react-frontend'>
            <Routes>
                {/* Tela de login (sem Navbar) */}
                <Route path="/" element={<Login />} />
                <Route path="/createUser" element={<CreateUser />} />

                {/* Rotas da aplicação (com Navbar) */}
                <Route path="/" element={<MainLayout />}>
                    <Route path="/home" element={<Home />} />
                    {/* TODO <Route path="/" element={<Listar />} /> */}
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;