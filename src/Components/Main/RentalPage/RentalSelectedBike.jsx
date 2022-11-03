import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider} from 'react-router-dom';
import MyDropdownBikeSize from '../../../UI/dropdown/MyDropdownBikeSize';
import MyDropdownBrend from '../../../UI/dropdown/MyDropdownBrend';
import './../../../Styles/Main/RentalPage/RentalSelectedBike.scss';
import RentalBikeCard from './RentalBikeCard';
import { aluminiumBikes, carbonBikes, cityBikes, mtbBikes, bikesBrend, bikesFrameSize, rentalRequestRoute } from './../../../Constant/index';
import { useState } from 'react';
import MyButton from '../../../UI/button/MyButton';
import { useEffect } from 'react';

function RentalSelectedBike({setChangeChoise, ...props }) {

   const [selectedOptionSize, setSelectedOptionSize] = useState(bikesFrameSize[0]);
   const [selectedOptionBrend, setSelectedOptionBrend] = useState(bikesBrend[0]);
   const [hideSelectionBrend, setHideSelectionBrend] = useState(false)
   const [firstSorting, setFirstSorting] = useState('');
   const [finalSorting, setFinalSorting] = useState(props.selectedTypeOfBike);


   useEffect(() => {
      if (!props.changeChoise) {
         setFinalSorting(props.selectedTypeOfBike)
      }
      
   })

   const laeveSize = (option) => {
      setChangeChoise(true)
      setHideSelectionBrend(true)
      setSelectedOptionSize(option)
      if (option === 'All') {
         setFinalSorting(props.selectedTypeOfBike)
         setHideSelectionBrend(false)
         setSelectedOptionSize(bikesFrameSize[0])
         setSelectedOptionBrend(bikesFrameSize[0])
      } else {
         let result = props.selectedTypeOfBike.filter(item => item.size === option)
         setFinalSorting(result)
         setFirstSorting(result)
      }
   }

   const laeveBrend = (option) => {
      setSelectedOptionBrend(option)
      if (option === 'All') {
         setFinalSorting(firstSorting)
      } else {
         let result = firstSorting.filter(item => item.brend === option)
         setFinalSorting(result)
      }
   }

   

   return (
      <div className='rentalSelectedBike__wrapper'>
         <div className="rentalSelectedBike__body">
            <div className="rentalSelectedBike__search">
               <div className="rentalSelectedBike__brend rentalSelectedBike__search-type">
                  <div className="rentalSelectedBike__signature signature">Frame size</div>
                     <MyDropdownBikeSize
                        bikesFrameSize={bikesFrameSize}
                        selectedOptionSize={selectedOptionSize}
                        laeveSize={laeveSize}
                     />
               </div>
               <div className="rentalSelectedBike__sizeFrame rentalSelectedBike__search-type">
                  <div className="rentalSelectedBike__signature signature">Brend</div>
                     <MyDropdownBrend
                           hideSelectionBrend={hideSelectionBrend}
                           bikesBrend={bikesBrend}
                           selectedOptionBrend={selectedOptionBrend}
                           laeveBrend= {laeveBrend}
                        />
                  <div
                     className={ hideSelectionBrend ? "rentalSelectedBike__hideSelection" : "rentalSelectedBike__hideSelection-active"}
                  ></div>
               </div>
            </div>
            <div className="rentalSelectedBike__options">
               {finalSorting.map((item, index) => (
                  <div
                     className="rentalSelectedBike__card"
                     key={index}
                  >
                     <RentalBikeCard
                        type={item.type}
                        size={item.size}
                        brend={item.brend}
                        image={item.image}
                        typeBike={item.typeBike}
                        fullName={item.fullName}
                        price={item.price}
                     />
                  </div>
               ))} 
            </div>
            <div className="rentalSelectedBike__select">
               <Link to={rentalRequestRoute[0].path}>
                  <MyButton
                     style={{ fontSize: '20px', fontWeight: '700' }}
                  >
                     Next
                  </MyButton>
               </Link>
               
            </div>
         </div>
      </div>
      
   );
}
export default RentalSelectedBike;