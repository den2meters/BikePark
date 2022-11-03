import React from 'react';
import './../../Styles/Header/BurgerMenu.scss'

function BurgerMenu(props) {

   const menuActivated = (e) => {
      e.currentTarget.classList.toggle('burger__body-active');
   }

   return (
      <div className='burger__body' onClick={e=>menuActivated(e)}>
         <span></span>
      </div>
   );
}
export default BurgerMenu;