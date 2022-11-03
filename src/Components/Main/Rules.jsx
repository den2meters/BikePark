import React, { useState } from 'react';
import PagesWrapper from './../../UI/pagewrapper/PagesWrapper';
import './../../Styles/Main/Rules.scss';
import { rules } from '../../Constant';

function Rules() {

   const [showHideTitle, setshowHideTitle] = useState(false);

   const showHide = () => {
      showHideTitle ? setshowHideTitle(false) : setshowHideTitle(true);
   }

   return (
      <div className='rules__wrapper'>
         <PagesWrapper>
            <div
               className="rules__titel-line"
               onClick={showHide}
            >
               <h1 className="rules__title title-h1">
                  Rules
               </h1>
               <div
                  className={showHideTitle ? "rules__title-arrow-hide arrow" : "rules__title-arrow-show arrow"}
               >&#x276F;</div>
            </div>
            <div
               className={showHideTitle ? "rules__container" : "rules__container-hide"}
            >
               <div className="rules__terms terms">
                  <div className="terms__subtitle title-h2">
                     Rent terms
                  </div>
                  <div className="terms__types-rental">
                     <div className="terms__column">
                        <div className="terms__signature signature">Rental period</div>
                        <div className="terms__terms-text text">The minimum bike rental period is 1 day. 10% discount for bookings over 5 days</div>
                     </div>
                     <div className="terms__column">
                        <div className="terms__signature signature">Rental period</div>
                        <div className="terms__terms-text text">The maximum bike rental period is 2 months. 15% discount for bookings over 10 days</div>
                     </div>
                  </div>
               </div>
               <div className="rules__rules-list rules-list">
                  <div className="rules-list__subtitle title-h2">
                     Rules
                  </div>
                  <div className="rules-list__container">
                     {rules.map((item, index) => (
                        <div key={index} className="rules-list__row">
                           <div className="rules-list__title subtitle">{ item.title }</div>
                           <div className="rules-list__text text">{ item.text }</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </PagesWrapper>
      </div>
   );
}
export default Rules;