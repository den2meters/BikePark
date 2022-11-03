import React, { useState } from 'react';
import BlockSubstrate from '../../../UI/blocksubstrate/BlockSubstrate';
import './../../../Styles/Main/RentalPage/RentalHours.scss';

function RentalHours({ setSelectedHour, setShowHourOptions, ...props }) {

   const selectedTime = (e) => {
      
      let allHours = Array.from(document.querySelectorAll('.rental-hours__hour'));
      for (let i = 0; i < allHours.length; i++) {
         if (e.textContent == allHours[i].textContent) {
            setSelectedHour(e.textContent);
            setShowHourOptions(false)
         }
      }
   }

   return (
      <div className="rental-hours__wrapper">
         <BlockSubstrate>
            <div className="rental-hours__body">
               {Array.from({ length: 11 }).map((item, index) => (
                  <li
                     key={index}
                     className="rental-hours__hour"
                     onClick={e=>selectedTime(e.target)}
                  >
                     {index + 1} hours
                  </li>
               ))}
            </div>
         </BlockSubstrate>
      </div>
   );
}
export default RentalHours;