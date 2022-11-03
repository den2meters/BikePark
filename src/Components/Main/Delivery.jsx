import React, { useState } from 'react';
import PagesWrapper from './../../UI/pagewrapper/PagesWrapper';
import './../../Styles/Main/Delivery.scss';

function Delivery() {

   const [showHideTitle, setshowHideTitle] = useState(false);

   const showHide = () => {
      showHideTitle ? setshowHideTitle(false) : setshowHideTitle(true);
   }

   return (
      <div className="delivery__wrapper">
         <PagesWrapper>
            <div
               className="delivery__titel-line"
               onClick={showHide}
            >
               <h1 className="delivery__title title-h1">
                  Delivery
               </h1>
               <div
                  className={showHideTitle ? "delivery__title-arrow-hide arrow" : "delivery__title-arrow-show arrow"}
               >&#x276F;</div>
            </div>
            <div
               className={showHideTitle ? "delivery__container" : "delivery__container-hide"}
            >
               <div className="delivery__subtitle title-h2">
                  Book delivery
               </div>
               <div className="delivery__text text">
                  Reserve online to match up with your vacation days and we’ll have bikes and all the accessories (helmets, locks, etc.) delivered to you. Choose your drop off and pickup times, and we’ll take care of the rest.
               </div>
            </div>
         </PagesWrapper>
      </div>
   );
}
export default Delivery;