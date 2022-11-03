import React from 'react';
import './../../Styles/Header/Time.scss'


function Time() {

   const time = () => {
      let currentDate = new Date();
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      
      if (minutes < 10) {
         minutes = '0' + minutes;
      }

      if (hours < 10) {
         hours = '0' + hours;
      }

      let currentTime = hours + ':' + minutes;
      if (hours > 0 && hours < 12) {
         currentTime = currentTime + ' AM';
      } else {
         currentTime = currentTime + ' PM';
      }
      return currentTime;
   }

   return (
      <div className='time__body'>
         <div className="time__time">{time()}</div>
         <div className="time__place">Time in Kyiv</div>
      </div>
   );
}
export default Time;