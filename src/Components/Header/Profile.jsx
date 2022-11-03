import React from 'react';
import { useState } from 'react';
import './../../Styles/Header/Profile.scss';
import ProfilePopUp from './ProfilePopUp';
import { profile } from '../../Constant';
import profileIcon from './Icon/personal.svg';
import profileIconActive from './Icon/personal_active.svg';


function Profile() {

   const [popUp, setpopUp] = useState(true);

   const popUpActivated = () => {
      let icon = document.querySelector('.profile__popUp');
      if (popUp) {
         setpopUp(false);
         icon.classList.add('profile__popUp-active');
      } else {
         setpopUp(true)
         icon.classList.remove('profile__popUp-active');
      }
   }

   return (
      <div
         className='profile__body'
         onMouseEnter={popUpActivated}
         onMouseLeave={popUpActivated}
      >
         {
            popUp ?
            <img src={profileIcon} alt="" /> :
            <img src={profileIconActive} alt="" />
         }
         <div className="profile__popUp">
            <ProfilePopUp>
               <div className="menuMobile__item">
                  {profile[0].title}
               </div>
            </ProfilePopUp>
         </div>
      </div>
   );
}
export default Profile;