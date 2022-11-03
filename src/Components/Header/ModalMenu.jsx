import React from 'react';
import { useState } from 'react';
import './../../Styles/Header/ModalMenu.scss';


function ModalMenu(props) {

   const [windowHeight, setWindowHeight] = useState(window.innerHeight - props.heightHeader);

   window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight - props.heightHeader);
   })

   return (
      <div
         className='modal'
         style={{ height: windowHeight }}
      >
         <div className="modal__menu">
            {props.children}
         </div>
      </div>
   );
}
export default ModalMenu;