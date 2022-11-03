import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import '../../Styles/Header/Header.scss'
import MyButton from '../../UI/button/MyButton';
import BurgerMenu from './BurgerMenu';
import logo from './Icon/main_icon.svg';
import MenuLarge from './MenuLarge';
import MenuMedium from './MenuMedium';
import MenuMobile from './MenuMobile';
import ModalMenu from './ModalMenu';
import Profile from './Profile';
import Time from './Time';


function Header() {

   const [menuActive, setMenuActive] = useState(false);
   const [heightHeader, setHeightHeader] = useState(80);

   const activateMenu = (e) => {
      let button = document.querySelector('.burger__body');
      setHeightHeader(document.querySelector('.header__body').clientHeight);
      if (menuActive === false && e.target.classList[0] === 'burger__body') {
         setMenuActive(true)
      } else {
         button.classList.remove('burger__body-active');
         setMenuActive(false)
      } 
   }

   return (
      <div className='header__wrapper' onClick={(e) => activateMenu(e)}>
         <div className='header__container container'>
            <div className="header__body">
               <div className="header__logo">
                  <Link to='/'><img src={ logo } alt="BikePark" /></Link>
               </div>
               <div className="header__menu-large">
                  <MenuLarge/>
               </div>
               <div className="header__menu-medium">
                  <MenuMedium/>
               </div>
               <div className="header__phone color-text">+654 21 547 4587</div>
               <div className="header__profile">
                  <Profile/>
               </div>
               <div className="header__feedbak">
                  <MyButton
                     style={{fontSize: '14px', fontWeight: 500}}
                  >Contact Us</MyButton>
               </div>
               <div className="header__time-info">
                  <Time/>
               </div>
               <div className="header__burger-menu" onClick={activateMenu}>
                  <BurgerMenu menuActive={menuActive} onClick={(e) => e.stopPropagation()}/>
               </div>
               <div className={menuActive ? "header__modal-menu-active" : "header__modal-menu"} >
                  <ModalMenu heightHeader={heightHeader}>
                     <MenuLarge/>
                  </ModalMenu>
               </div>
               <div className={menuActive ? "header__modal-mobile-menu-active" : "header__modal-mobile-menu"} >
                  <ModalMenu heightHeader={heightHeader} >
                     <MenuMobile/>
                  </ModalMenu>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Header;