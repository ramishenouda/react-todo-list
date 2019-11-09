import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor:'#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px'
}

const linkStyle = {
    color: '#fff'
}
export default Header;