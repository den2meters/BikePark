import React, { useState, useRef, useEffect } from 'react';
import './../../../Styles/Main/RentalPage/RentalTimeType.scss';
import BlockSubstrate from './../../../UI/blocksubstrate/BlockSubstrate';
import RentalHours from './RentalHours';

function RentalTimeType() {

   const [chooseType, setChooseType] = useState(false);
   const [selectedHour, setSelectedHour] = useState('Hours');
   const [showHourOptions, setShowHourOptions] = useState(false);

   const rentalHours = useRef();

   useEffect(() => {
      window.addEventListener('click', (e) => {
         if (e.target.closest('#hoursOption') !== rentalHours.current && showHourOptions) {
            setShowHourOptions(false)
            
         }
      })
   })


   const rentalType = (e) => {
      if (e.target.className === "type__hours") {
         chooseType ? setChooseType(false) : setChooseType(true)
      }
      if (e.target.className === "type__day") {
         setShowHourOptions(false)
         setSelectedHour('Hours')
         chooseType ? setChooseType(false) : setChooseType(true)
      }
      if (e.target.id === 'hoursOption') {
         showHourOptions ? setShowHourOptions(false) : setShowHourOptions(true)
      }
   }

   return (
      <div className="type__wrapper">
         <BlockSubstrate>
            <div className="type__body">
               <div
                  onClick={e => rentalType(e)}
                  className={chooseType ? "type__day" : "type__day-active type__day"}
               >Days
               </div>
               <div
                  id='hoursOption'
                  ref={rentalHours}
                  onClick={e => rentalType(e)}
                  className={chooseType ? "type__day type__day-active" : "type__day"}
               >{selectedHour}
               </div>
            </div>
         </BlockSubstrate>
         <div
            className={showHourOptions ? "type__hours" : "type__hours type__hours-active"}
         >
            <RentalHours chooseType={chooseType} setSelectedHour={setSelectedHour} setShowHourOptions={ setShowHourOptions } />
         </div>
      </div>
   );
}
export default RentalTimeType;