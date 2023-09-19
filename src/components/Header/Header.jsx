import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/result">Result</NavLink>
                <NavLink to="/information">Information</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/result">Result</a>
                <a href="/information">Information</a>
                <a href="/blog">Blog</a> */}
            </nav>
        </div>
    );
};

export default Header;