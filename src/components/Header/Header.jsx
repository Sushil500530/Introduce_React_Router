import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/result">Result</Link>
                <Link to="/information">Information</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/users">Users</Link>
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