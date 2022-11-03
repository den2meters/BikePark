import React from 'react';
import './../../Styles/Header/MenuLarge.scss';
import { navbar, pagesRoutes } from '../../Constant';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AboutUs from './../Main/AboutUs';

function MenuLarge() {



   return (
      <div className="menuLarge__menu">
            <nav className="menuLarge__menu-list">
               {navbar.map((item, index) => (
                  <li
                     className="menuLarge__menu-items"
                     key={item.id}
                  >
                     <Link to={pagesRoutes[index].path}>{item.title}</Link>
                  </li>
               )) }
            </nav>
      </div>
   );
}
export default MenuLarge;