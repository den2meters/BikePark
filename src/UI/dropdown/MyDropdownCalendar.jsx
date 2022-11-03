import React, { Children, useState, useRef, useEffect } from 'react';
import classes from './MyDropdown.module.scss';
import BlockSubstrate from '../blocksubstrate/BlockSubstrate';
import RentalCalendar from '../../Components/Main/RentalPage/RentalCalendar';
import { useContext } from 'react';
import { RentalDateGlobal } from '../../Constant/context';

function MyDropdownCalendar(props) {

   const { selectedDateGlabol, setSelectedDateGlobal } = useContext(RentalDateGlobal);

   const [startDate, setStartDate] = useState('YYYY.MM.DD');
   const [finishDate, setFinishDate] = useState('YYYY.MM.DD');
   const [isActive, setIsActive] = useState(false);

   const dropdownButtonCalendarFirst = useRef();
   const dropdownButtonCalendarSecond = useRef();
   const dropdownButtonCalendarBody = useRef();

   useEffect(() => {
      window.addEventListener('click', (e) => {
         if (
            e.target.closest('#dropdownButtonCalendarFirst') !== dropdownButtonCalendarFirst.current
            && e.target.closest('#dropdownButtonCalendarSecond') !== dropdownButtonCalendarSecond.current
            && e.target.closest('#dropdownButtonCalendarBody') !== dropdownButtonCalendarBody.current
            && isActive
         ) {
            setIsActive(false)
         }
      })
   })

   const selectedDate = (readyStartDate, readyFinishDate) => {
      setSelectedDateGlobal([readyStartDate, readyFinishDate])
      setStartDate(readyStartDate);
      setFinishDate(readyFinishDate);
      setIsActive(false)
   }

   const activate = (e) => {
      isActive ? setIsActive(false) : setIsActive(true);
   }

   return (
      <div className={classes.MyDropdown}>
         <div className={classes.MyDropdownCalendarDates}>
            <BlockSubstrate style={{zIndex: 30, position:'relative'}}>
               <div
                  id={'dropdownButtonCalendarFirst'}
                  ref={dropdownButtonCalendarFirst}
                  className={classes.MyDropdownButton}
                  onClick={e=>activate(e)}
               >
                  <div className={classes.MyDropdownName} >{startDate}</div>
                  <div className={ isActive ? classes.MyDropdownArrowActive : classes.MyDropdownArrow} >&#x276F;</div>
               </div>
            </BlockSubstrate>
            <span className={classes.MyDropdownDivider} >-</span>
            <BlockSubstrate style={{zIndex: 30, position:'relative'}}>
               <div
                  id={'dropdownButtonCalendarSecond'}
                  ref={dropdownButtonCalendarSecond}
                  className={classes.MyDropdownButton}
                  onClick={e=>activate(e)}
               >
                  <div className={classes.MyDropdownName} >{finishDate}</div>
                  <div className={ isActive ? classes.MyDropdownArrowActive : classes.MyDropdownArrow} >&#x276F;</div>
               </div>
            </BlockSubstrate>
         </div>
         <div className={isActive ? classes.MyDropdownContenCalendar : classes.MyDropdownContenCalendarActive}>
            <BlockSubstrate>
               <div
                  id={'dropdownButtonCalendarBody'}
                  ref={dropdownButtonCalendarBody}
                  className={classes.MyDropdownCalendarOption}
               >
                  <RentalCalendar isActive={isActive} selectedDate={selectedDate} />
               </div>
            </BlockSubstrate>
         </div>
      </div>
   );
}
export default MyDropdownCalendar;