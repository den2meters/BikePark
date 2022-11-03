import React from 'react';
import './../../../Styles/Main/RentalPage/RentalTime.scss';
import RentalTimeType from './RentalTimeType';
import MyDropdownCalendar from '../../../UI/dropdown/MyDropdownCalendar';
import MyDropdownDelivery from '../../../UI/dropdown/MyDropdownDelivery';

function RentalTime() {
   return (
      <div className="rental__rental-time rental-time">
         <div className="rental-time__body">
            <div className="rental-time__type rental-time__item">
               <div className="rental-time__sinature signature">Type of rent</div>
               <RentalTimeType/>
            </div>
            <div className="rental-time__choose-date rental-time__item">
               <div className="rental-time__sinature signature">Start and end date of rent</div>
               <MyDropdownCalendar/>
            </div>
            <div className="rental-time__delivery-place rental-time__item">
               <div className="rental-time__sinature signature">Delivery</div>
               <MyDropdownDelivery/>
            </div>
         </div>
      </div>
   );
}
export default RentalTime;