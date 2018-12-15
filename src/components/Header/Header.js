import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Personal Manager</h1>
        <NavLink to="/" activeClassName="current" exact={true}>Home</NavLink>
        <NavLink to="/tasks" activeClassName="current" exact={true}>Tasks</NavLink>
        <NavLink to="/expenses" activeClassName="current" exact={true}>Expenses</NavLink>
        <NavLink to="/goals" activaClassName="current" exact={true}>Goals</NavLink>
    </header>
);


export default Header;