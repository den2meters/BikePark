import React, { Children, useState, useRef, useEffect } from 'react';
import classes from './MyDropdown.module.scss';
import BlockSubstrate from '../blocksubstrate/BlockSubstrate';
import {deliveryPlace} from '../../Constant'

function MyDropdownDelivery(props) {

   const [selectedOption, setSelectedOption] = useState(deliveryPlace[0]);
   const [isActive, setIsActive] = useState(false);

   const dropdownButtonDelivery = useRef();

   useEffect(() => {
      window.addEventListener('click', (e) => {
         if (e.target.closest('#dropdownButtonDelivery') !== dropdownButtonDelivery.current && isActive) {
            setIsActive(false)
         }
      })
   })

   const selected = (e) => {
      setSelectedOption(e.textContent);
      if (isActive) setIsActive(false);
   }

   const activate = (e) => {
      isActive ? setIsActive(false) : setIsActive(true);
   }

   return (
      <div className={classes.MyDropdown}>
         <BlockSubstrate style={{zIndex: 30, position:'relative'}}>
            <div
               id={'dropdownButtonDelivery'}
               ref={dropdownButtonDelivery}
               className={classes.MyDropdownButton}
               onClick={e=>activate(e)}
            >
               <div className={classes.MyDropdownName} >{selectedOption}</div>
               <div className={ isActive ? classes.MyDropdownArrowActive : classes.MyDropdownArrow} >&#x276F;</div>
            </div>
         </BlockSubstrate>
         <div className={isActive ? classes.MyDropdownConten : classes.MyDropdownContenActive}>
            <BlockSubstrate>
               {deliveryPlace.map((item, index)=>(
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