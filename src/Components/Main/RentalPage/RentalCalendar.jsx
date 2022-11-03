import React, { useEffect, useRef, useState } from 'react';
import MyButton from '../../../UI/button/MyButton';
import './../../../Styles/Main/RentalPage/RentalCalendar.scss';

function RentalCalendar({ selectedDate, ...props }) {

   const allMonth = [
      { id: 0, name: "January", amountDays: 31 },
      { id: 1, name: "February", amountDays: 28 },
      { id: 2, name: "March", amountDays: 31 },
      { id: 3, name: "April", amountDays: 30 },
      { id: 4, name: "May", amountDays: 31 },
      { id: 5, name: "June", amountDays: 30 },
      { id: 6, name: "July", amountDays: 31 },
      { id: 7, name: "August", amountDays: 31 },
      { id: 8, name: "September", amountDays: 30 },
      { id: 9, name: "October", amountDays: 31 },
      { id: 10, name: "November", amountDays: 30 },
      { id: 11, name: "December", amountDays: 31 },
   ]

   const allWeek = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

   useEffect(() => {
      if (!props.isActive) {
         clearCalendar();
      }
   })

   const [monthNumberFirst, setMonthNumberFirst] = useState(new Date().getMonth());
   const [monthNumberSecond, setMonthNumberSecond] = useState(new Date().getMonth() + 1);
   const [yearNumberFirst, setYearNumberFirst] = useState(new Date().getFullYear());
   const [yearNumberSecond, setYearNumberSecond] = useState(new Date().getFullYear());
   const [selectedStartDay, setSelectedStartDay] = useState('');
   const [selectedLastDay, setSelectedLastDay] = useState('');
   const [selectedStartMonth, setSelectedStartMonth] = useState('');
   const [selectedLastMonth, setSelectedLastMonth] = useState('');
   const [selectedStartYear, setSelectedStartYear] = useState('');
   const [selectedLastYear, setSelectedLastYear] = useState('');

   let startDeayOfMonthFirst = new Date(yearNumberFirst, monthNumberFirst, 1).getDay() == 0 ? 7 : new Date(yearNumberFirst, monthNumberFirst, 1).getDay();
   let startDeayOfMonthSecond = new Date(yearNumberSecond, monthNumberSecond, 1).getDay() == 0 ? 7 : new Date(yearNumberSecond, monthNumberSecond, 1).getDay();

   

   const changeMonthUp = (e) => {
      setMonthNumberFirst(monthNumberFirst + 1)
      setMonthNumberSecond(monthNumberSecond + 1)
      if (monthNumberFirst === 11) {
         setMonthNumberFirst(0)
         setYearNumberFirst(yearNumberFirst + 1)
      }
      if (monthNumberSecond === 11) {
         setMonthNumberSecond(0)
         setYearNumberSecond(yearNumberSecond + 1)
      }
      clearCalendar();
   }

   const changeMonthDown = (e) => {
      if (monthNumberFirst === new Date().getMonth() && yearNumberFirst === new Date().getFullYear()) {
         setMonthNumberFirst(monthNumberFirst);
         setYearNumberFirst(yearNumberFirst);
         
      } else {
         setMonthNumberFirst(monthNumberFirst - 1)
         setMonthNumberSecond(monthNumberSecond - 1)
         if (monthNumberFirst === 0) {
            setMonthNumberFirst(11)
            setYearNumberFirst(yearNumberFirst - 1)
         }
         if (monthNumberSecond === 0) {
            setMonthNumberSecond(11)
            setYearNumberSecond(yearNumberSecond - 1)
         }
      }
      clearCalendar();
   }

   const dateActive = (e) => {
      if (selectedStartDay === '' && selectedLastDay === '') {
         setSelectedStartDay(e)
         e.classList.add('rental-calendar__day-active-start')
      } else if (selectedStartDay !== '' && selectedLastDay === '') {

         let selectedYearStart = null;
         let selectedMonthStart = null;
         let selectedYearFinish = null;
         let selectedMonthFinish = null;
         if (selectedStartDay.classList.contains('first-month-calendar')) {
            selectedYearStart = yearNumberFirst;
            selectedMonthStart = monthNumberFirst;
         } else if (selectedStartDay.classList.contains('second-month-calendar')) {
            selectedYearStart = yearNumberSecond;
            selectedMonthStart = monthNumberSecond;
         }
         if (e.classList.contains('first-month-calendar')) {
            selectedYearFinish = yearNumberFirst;
            selectedMonthFinish = monthNumberFirst;
         } else if (e.classList.contains('second-month-calendar')) {
            selectedYearFinish = yearNumberSecond;
            selectedMonthFinish = monthNumberSecond;
         }
         setSelectedStartMonth(selectedMonthStart + 1)
         setSelectedLastMonth(selectedMonthFinish + 1)
         setSelectedStartYear(selectedYearStart)
         setSelectedLastYear(selectedYearFinish)

         

         let startTemp = new Date(selectedYearStart, selectedMonthStart, selectedStartDay.textContent);
         let finishTemp = new Date(selectedYearFinish, selectedMonthFinish, e.textContent);
         if (startTemp - finishTemp > 0) {
            setSelectedLastDay('')
         } else {
            setSelectedLastDay(e);
            e.classList.add('rental-calendar__day-active-finish')
            let selectedDaysFirstMonth = Array.from(document.querySelectorAll('.first-month-calendar'));
            let selectedDaysSecondMonth = Array.from(document.querySelectorAll('.second-month-calendar'));
            if (selectedMonthStart === selectedMonthFinish && selectedStartDay.classList.contains('first-month-calendar')) {
               for (let i = 0; i < selectedDaysFirstMonth.length; i++){
                  if (+selectedDaysFirstMonth[i].textContent > +selectedStartDay.textContent && +selectedDaysFirstMonth[i].textContent < e.textContent) {
                     selectedDaysFirstMonth[i].classList.add('rental-calendar__day-betweenDate')
                  }
               }
            }
            if (selectedMonthStart === selectedMonthFinish && selectedStartDay.classList.contains('second-month-calendar')) {
               for (let i = 0; i < selectedDaysSecondMonth.length; i++){
                  if (+selectedDaysSecondMonth[i].textContent > +selectedStartDay.textContent && +selectedDaysSecondMonth[i].textContent < e.textContent) {
                     selectedDaysSecondMonth[i].classList.add('rental-calendar__day-betweenDate')
                  }
               }
            }
            if (selectedMonthStart !== selectedMonthFinish) {
               for (let i = 0; i < selectedDaysFirstMonth.length; i++){
                  if (+selectedDaysFirstMonth[i].textContent > +selectedStartDay.textContent) {
                     selectedDaysFirstMonth[i].classList.add('rental-calendar__day-betweenDate')
                  }
               }
               for (let i = 0; i < selectedDaysSecondMonth.length; i++){
                  if (+selectedDaysSecondMonth[i].textContent < +e.textContent) {
                     selectedDaysSecondMonth[i].classList.add('rental-calendar__day-betweenDate')
                  }
               }
            }
         }
         
      } else if (selectedStartDay !== '' && selectedLastDay !== '') {
         selectedStartDay.classList.remove('rental-calendar__day-active-start')
         selectedLastDay.classList.remove('rental-calendar__day-active-finish')
         setSelectedStartDay(e)
         e.classList.add('rental-calendar__day-active-start')
         setSelectedLastDay('')
         let selectedDays = Array.from(document.querySelectorAll('.rental-calendar__day'));
         for (let i = 0; i < selectedDays.length; i++){
         if(selectedDays[i].classList.contains('rental-calendar__day-betweenDate'))
            selectedDays[i].classList.remove('rental-calendar__day-betweenDate');
         }
      }
   }

   const confirmation = () => {
      if (selectedStartDay !== '' && selectedLastDay !== '') {
         let startTemp = `
         ${selectedStartYear}
         .${selectedStartMonth < 10 ? '0' + selectedStartMonth: selectedStartMonth}
         .${+selectedStartDay.textContent < 10 ? '0' + selectedStartDay.textContent : selectedStartDay.textContent}
         `;
         
         let finishTemp = `
         ${selectedLastYear}
         .${selectedLastMonth < 10 ? '0' + selectedLastMonth : selectedLastMonth}
         .${selectedLastDay.textContent < 10 ? '0' + selectedLastDay.textContent : selectedLastDay.textContent}
         `;

         selectedDate(startTemp, finishTemp)
         setSelectedStartDay('')
         setSelectedLastDay('')
         clearCalendar();
       }
   }

   function clearCalendar() {
      setSelectedStartDay('')
      setSelectedLastDay('')
      let selectedDays = Array.from(document.querySelectorAll('.rental-calendar__day'));
      for (let i = 0; i < selectedDays.length; i++) {
         if (selectedDays[i].classList.contains('rental-calendar__day-active-start')) {
            selectedStartDay.classList.remove('rental-calendar__day-active-start');
         }
         if (selectedDays[i].classList.contains('rental-calendar__day-active-finish')) {
            selectedLastDay.classList.remove('rental-calendar__day-active-finish');
         }
         if (selectedDays[i].classList.contains('rental-calendar__day-betweenDate')) {
            selectedDays[i].classList.remove('rental-calendar__day-betweenDate');
         }
      }
   }

   return (
      <div className='rental-calendar__wrapper'>
         <div className="rental-calendar__body">
            <div className="rental-calendar__first-month">
               <div className="rental-calendar__header">
                  <div
                     className="rental-calendar__name-month"
                  >{allMonth[monthNumberFirst].name}
                     <br /><span>{yearNumberFirst}</span>
                  </div>
                  <div className="rental-calendar__arrows">
                     <div
                        className="rental-calendar__arrow-up"
                        onClick={changeMonthUp}
                     >
                        &#x276F;</div>
                     <div
                        className="rental-calendar__arrow-down"
                        onClick={changeMonthDown}
                     >
                        &#x276F;</div>
                  </div>
               </div>
               <div className='rental-calendar__days'>
                  {allWeek.map((item, index) => (
                     <li
                        className='rental-calendar__dayOfWeek'
                        key={index}
                     >{item}</li>
                  ))}
                  {Array.from({ length: startDeayOfMonthFirst -1}).map((item, index) => (
                     <li key={index}> </li>
                  ))}
                  {Array.from({ length: allMonth[monthNumberFirst].amountDays }).map((item, index) => (
                     <li
                        className='rental-calendar__day first-month-calendar'
                        key={index}
                        onClick={e=>dateActive(e.target)}
                     >
                        {index + 1}
                     </li>
                  ))}
               </div>
            </div>
            <div className="rental-calendar__second-month">
               <div className="rental-calendar__header">
                  <div className="rental-calendar__name-month">
                     {allMonth[monthNumberSecond].name}
                     <br /><span>{yearNumberSecond}
                     </span>
                  </div>
                  <div className="rental-calendar__arrows">
                     <div
                        className="rental-calendar__arrow-up"
                        onClick={changeMonthUp}
                     >
                        &#x276F;</div>
                     <div
                        className="rental-calendar__arrow-down"
                        onClick={changeMonthDown}
                     >
                        &#x276F;</div>
                  </div>
               </div>
               <div className='rental-calendar__days'>
                  {allWeek.map((item, index) => (
                     <li
                        className='rental-calendar__dayOfWeek'
                        key={index}
                     >{item}</li>
                  ))}
                  {Array.from({ length: startDeayOfMonthSecond-1}).map((item, index) => (
                     <li key={index}></li>
                  ))}
                  {Array.from({ length: allMonth[monthNumberSecond].amountDays }).map((item, index) => (
                     <li className='rental-calendar__day second-month-calendar'
                        key={index}
                        onClick={e=>dateActive(e.target)}
                     >{index + 1}</li>
                  ))}
               </div>
            </div>
         </div>
         <div className="rental-calendar__confirm-button">
            <MyButton
               style={{ fontSize: '20px', fontWeight: '700' }}
               onClick={confirmation}
            >
               Confirm</MyButton>
         </div>
      </div>
   );
}
export default RentalCalendar;