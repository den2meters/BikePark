import React from 'react';
import './../../Styles/Main/Contacts.scss';
import Application from './Application';
import PagesWrapper from './../../UI/pagewrapper/PagesWrapper';
import SimpleMap from './SimpleMap';

function Contacts() {
   return (
      <div className="contact__wrapper">
         <PagesWrapper>
            <h1 className="contact__title title-h1">Contacts</h1>
            <div className="contact__body">
               <div className="contact__info info">
                  <div className="info__body">
                     <div className="info__item">
                        <div className="info__name signature">Phone number</div>
                        <div className="info__value text">+654 21 547 4587</div>
                     </div>
                     <div className="info__item">
                        <div className="info__name signature">E-mail</div>
                        <div className="info__value text">bike.park.2022@gmail.com</div>
                     </div>
                     <div className="info__item">
                        <div className="info__name signature">Adress</div>
                        <div className="info__value text">Ukraine, Kyiv Ave. Bazhan 23</div>
                     </div>
                  </div>
               </div>
               <div className="contact__application">
                  <Application/>
               </div>
               <div className="contact__map">
                  {/* <SimpleMap/> */}
               </div>
            </div>
         </PagesWrapper>
      </div>
   );
}
export default Contacts;