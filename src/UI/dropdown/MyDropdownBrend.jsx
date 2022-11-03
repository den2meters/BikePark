import React, { Children, useState, useRef, useEffect } from 'react';
import classes from './MyDropdown.module.scss';
import BlockSubstrate from '../blocksubstrate/BlockSubstrate';

function MyDropdownDelivery({laeveBrend, ...props}) {

   const [isActive, setIsActive] = useState(false);

   const dropdownButtonBrend = useRef();

   useEffect(() => {
      window.addEventListener('click', (e) => {
         if (e.target.closest('#dropdownButtonBrend') !== dropdownButtonBrend.current && isActive) {
            setIsActive(false)
         }
      })
   })

   const selected = (e) => {
      laeveBrend(e.textContent)
      if (isActive) setIsActive(false);
   }

   const activate = (e) => {
      isActive ? setIsActive(false) : setIsActive(true);
   }

   return (
      <div className={classes.MyDropdown}>
         <BlockSubstrate style={{zIndex: 30, position:'relative'}}>
            <div
               id={'dropdownButtonBrend'}
               ref={dropdownButtonBrend}
               className={classes.MyDropdownButton}
               onClick={e=>activate(e)}
            >
               <div className={classes.MyDropdownName} >{props.selectedOptionBrend}</div>
               <div className={ isActive ? classes.MyDropdownArrowActive : classes.MyDropdownArrow} >&#x276F;</div>
            </div>
         </BlockSubstrate>
         <div className={isActive ? classes.MyDropdownConten : classes.MyDropdownContenActive}>
            <BlockSubstrate>
               {props.bikesBrend.map((item, index)=>(
                  <div
                     key={index}
                     className={classes.MyDropdownDeliveryOption}
                     onClick={e=>selected(e.target)}
                  >
                     {item}    
                  </div>
               ))}
            </BlockSubstrate>
         </div>
      </div>
   );
}
export default MyDropdownDelivery;