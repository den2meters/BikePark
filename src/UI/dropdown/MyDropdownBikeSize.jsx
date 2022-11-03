import React, { Children, useState } from 'react';
import classes from './MyDropdown.module.scss';
import BlockSubstrate from '../blocksubstrate/BlockSubstrate';
import { useEffect } from 'react';
import { useRef } from 'react';

function MyDropdownBikeSize({laeveSize, ...props}) {

   
   const [isActive, setIsActive] = useState(false);

   const dropdownButtonSize = useRef();

   useEffect(() => {
      window.addEventListener('click', (e) => {
         if (e.target.closest('#DropdownButtonSize') !== dropdownButtonSize.current && isActive) {
            setIsActive(false)
         }
      })
   })

   const selected = (e) => {
      laeveSize(e.textContent)
      if (isActive) setIsActive(false);
   }

   const activate = (e) => {
      isActive ? setIsActive(false) : setIsActive(true);
   }

   return (
      <div className={classes.MyDropdown} >
         <BlockSubstrate style={{zIndex: 30, position:'relative'}}>
            <div
               id={'DropdownButtonSize'}
               ref={dropdownButtonSize}
               className={classes.MyDropdownButton}
               onClick={e=>activate(e)}
            >
               <div className={classes.MyDropdownName} >{props.selectedOptionSize}</div>
               <div className={ isActive ? classes.MyDropdownArrowActive : classes.MyDropdownArrow} >&#x276F;</div>
            </div>
         </BlockSubstrate>
         <div className={isActive ? classes.MyDropdownConten : classes.MyDropdownContenActive}>
            <BlockSubstrate>
               {props.bikesFrameSize.map((item, index)=>(
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
export default MyDropdownBikeSize;