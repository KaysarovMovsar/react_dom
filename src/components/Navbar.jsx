import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="Navbar">
            <ul className="nav_list">
                <li className="nav_item">
                    <NavLink to="/">Меню</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/about">О нас</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/contacts">Контакты</NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/posts">Посты</NavLink>
                </li>
            </ul>
        </div>
    );
};

