import React from 'react'
import './../../../Styles/Main/RentalPage/RentalBikeType.scss';
import { typeOfBikes } from '../../../Constant';
import BlockSubstrate from '../../../UI/blocksubstrate/BlockSubstrate';
import { Scrollbars } from 'rc-scrollbars';
import { useState } from 'react';
import MyButton from '../../../UI/button/MyButton';
import { aluminiumBikes, cityBikes, carbonBikes, mtbBikes } from './../../../Constant/index'

function RentalBikeType({setIsSelectedTypeBike, setSelectedTypeOfBike, setChangeChoise, ...props }) {
   
   const [isSelectedType, setIsSelectedType] = useState(false);
   const [isActiveButton, setIsActiveButton] = useState('#DDE3EB')


   const showInfoBox = (e) => {
      let infoAboutBike = Array.from(document.querySelectorAll('.rentalBike__info-box'));
      for (let i = 0; i < infoAboutBike.length; i++) {
         if (e.classList[1] === infoAboutBike[i].classList[1]) {
            infoAboutBike[i].classList.toggle('rentalBike__info-box-active');
         } 
      }
   }

   const selectedType = (e) => {
      setChangeChoise(false)
      switch (e.classList[1]) {
         case 'aluminiumBikes':
            setSelectedTypeOfBike(aluminiumBikes);
            break;
         case 'cityBikes':
            setSelectedTypeOfBike(cityBikes);
            break;
         case 'carbonBikes':
            setSelectedTypeOfBike(carbonBikes);
            break;
         case 'mtbBikes':
            setSelectedTypeOfBike(mtbBikes);
            break;
         default:
            setSelectedTypeOfBike('');
      }

      let selectedType = Array.from(document.querySelectorAll('.rentalBike__button-selected'));
      for (let i = 0; i < selectedType.length; i++) {
         if (!selectedType[i].classList.contains('rentalBike__button-active')) {
            
         }
         if (e.classList[1] !== selectedType[i].classList[1]) {
            selectedType[i].classList.remove('rentalBike__button-active');
            selectedType[i].textContent ='+';
         }
         if (e.classList[1] === selectedType[i].classList[1]) {
            setIsSelectedType(true)
            setIsActiveButton('#3E80F7')
            e.classList.toggle('rentalBike__button-active')
            if (e.textContent === '+') {
               e.textContent = '✔';
            } else {
               e.textContent = '+';
               setIsSelectedType(false)
               setIsSelectedTypeBike(false);
               setIsActiveButton('#DDE3EB')
            }
         }
            
      }
   }

   const selectTypeOfBike = () => {
      if (isSelectedType) {
         setIsSelectedTypeBike(true);
      }
   }

   return (
      <div className='rentalBike__wrapper'>
         <div className="rentalBike__title">
            <div className="rentalBike__signature signature">Type of bike</div>
            <img src='./image/swipe-hand.png' alt="" className="rentalBike__icon-hand" />
            <div className="rentalBike__arrow">&#x276F;</div>
         </div>
         <div className="rentalBike__body">
             <Scrollbars style={{ width: '100%', height: 360 }}>
               <div className="rentalBike__labels">
                  {typeOfBikes.map((item,index)=>(
                     <div
                        key={index}
                        className="rentalBike__label"
                     >
                        <div className="rentalBike__image">
                           <img className='rentalBike__img' src={"./image/" + item.picture} alt="Bike" />
                        </div>
                        <BlockSubstrate>
                           <div className="rentalBike__description">
                              <div className="rentalBike__name text">{ item.frameType }</div>
                              <div className="rentalBike__price color-text">{item.price}</div>
                              <div className="rentalBike__buttons">
                                 <div className="rentalBike__wrapper-btn">
                                    <BlockSubstrate>
                                       <div
                                          className={["rentalBike__button", `showinfo-${item.id}`, "rentalBike__button-info"].join(' ')}
                                          onMouseEnter={e => showInfoBox(e.target)}
                                          onMouseLeave={e => showInfoBox(e.target)}
                                       >?</div>
                                    </BlockSubstrate>
                                 </div>
                                 <div className="rentalBike__wrapper-btn">
                                    <BlockSubstrate>
                                       <div
                                          className={["rentalBike__button", `${item.id}Bikes`, "rentalBike__button-selected"].join(' ')}
                                          onClick={e=>selectedType(e.target)}
                                       >+</div>
                                    </BlockSubstrate>
                                 </div>
                              </div>
                           </div>
                        </BlockSubstrate>
                        <div
                           className={["rentalBike__info-box", `showinfo-${item.id}`].join(' ')}
                        >
                           <BlockSubstrate>
                              <div style={{fontSize: '14px'}} className={"rentalBike__info-boxText signature"}>
                                 {item.description}
                              </div>
                           </BlockSubstrate>
                        </div>
                     </div>
                  ))}
               </div>
            </Scrollbars>
         </div>
         <div className="rentalBike__foundButton">
            <MyButton
               onClick={selectTypeOfBike}
               style={{ fontSize: '20px', fontWeight: '700', backgroundColor: `${isActiveButton}` }}
            >{ isSelectedType ? 'Find' : 'Select type' }</MyButton>

         </div>
      </div>
   );
}
export default RentalBikeType;