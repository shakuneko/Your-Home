import { NavLink } from 'react-router-dom';
import React from 'react';
import CartSummary from './CartSummary';

export default function NavBar()    {
    return (
            
            <div className="header-menu">
                <div className="header-word">
                    <NavLink to="/" className="menu1" activeClassName="menu1--active">
                        Inspirations
                    </NavLink>
                    <NavLink to="/shop" className="menu1" activeClassName="menu1--active">
                        Shop
                    </NavLink>
                    <NavLink to="/" className="menu1" activeClassName="menu1--active">
                        Designers
                    </NavLink>
                    <NavLink to="/" className="menu1" activeClassName="menu1--active">
                        About Us
                    </NavLink>
                </div>
                <div className=" header-icon ">
                    <img alt="" className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-search.png"/>
                    <img alt="" className="header-icon1" src="https://raw.githubusercontent.com/shakuneko/icon/master/yh-account.png"/>
                    <CartSummary/>
                </div>
            </div> 
    
    );
}