import React from 'react';
import './../../Styles/Header/MenuMedium.scss';
import { navbar, navbarMedium, pagesRoutesMedium } from '../../Constant';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function MenuMedium() {
   return (
      <div className="menuMedium__menu">
         <nav className="menuMedium__menu-list">
            {navbarMedium.map((item, index) => (
               <li
                  className="menuLarge__menu-items"
                  key={item.id}
               >
                  <Link to={pagesRoutesMedium[index].path}>{item.title}</Link>
               </li>
            )) }
         </nav>
      </div>
   );
}
export default MenuMedium;