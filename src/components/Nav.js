import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <div className='heading'><h1>Shoppping Website</h1></div>
            <ul className='nav-links'>
                <Link to='/'><li className='App-link'>Home</li></Link>
                <Link to='/shop'><li className='App-link'>Shop</li></Link>
                <Link to='/cart'><li className='App-link'>Cart</li></Link>
            </ul>
        </nav>
        
        
    )
}

export default React.memo(Nav);