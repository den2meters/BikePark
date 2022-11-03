import React from 'react';
import MyButton from '../../UI/button/MyButton';
import './../../Styles/Header/MenuMobile.scss';
import { navbar, profile, pagesRoutes } from '../../Constant';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function MenuMobile() {
   return (
      <div className="menuMobile__menu">
         <nav className="menuMobile__menu-list">
            {navbar.map((item, index) => (
               <li
                  className="menuMobile__menu-items"
                  key={item.id}
               >
                  <Link to={pagesRoutes[index].path}>{item.title}</Link>
               </li>
            )) }
         </nav>
         <div className="menuMobile__profile">
            <div className="menuMobile__item">
               {profile[0].title}
            </div>
         </div>
         <div className="menuMobile__feedback">
            <MyButton
               style={{fontSize: '14px', fontWeight: 500}}
            >
               Feedback
            </MyButton>
         </div>
      </div>
   );
}
export default MenuMobile;