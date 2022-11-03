import React from 'react';
import './../../Styles/Header/ProfilePopUp.scss';

function ProfilePopUp(props) {
   return (
      <div className='popUp__body'>
         <div className="popUp__item">
            {props.children}
         </div>
      </div>
   );
}
export default ProfilePopUp;