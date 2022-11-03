import React from 'react';
import './../../../Styles/Main/RentalPage/RentalHeader.scss'

function RentalHeader() {
   return (
      <div className="rental__header rental-header">
         <div className="rental-header__titel-line">
            <h1 className="rental-header__title title-h1">
               Bicycle rental with delivery
            </h1>
         </div>
         <div className="rental-header__accessories accessories">
            <div className='accessories__item'>
               <div className="accessories__body">
                  <img className='accessories__image' src={require('./images/rental-acces-helmet.png')} alt="" />
                  <div className="accessories__name text">Helmet</div>
                  <div className="accessories__cost color-text">Free</div>
               </div>
            </div>
            <div className='accessories__item'>
               <div className="accessories__body">
                  <img className='accessories__image' src={require('./images/rental-acces-flashlight.png')} alt="" />
                  <div className="accessories__name text">Flashlight</div>
                  <div className="accessories__cost color-text">Free</div>
               </div>
            </div>
            <div className='accessories__item'>
               <div className="accessories__body">
                  <img className='accessories__image' src={require('./images/rental-acces-lock.png')} alt="" />
                  <div className="accessories__name text">Lock</div>
                  <div className="accessories__cost color-text">Free</div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default RentalHeader;