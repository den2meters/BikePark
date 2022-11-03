import React from 'react';
import { useState } from 'react';
import PageConnector from '../../../UI/pageconnector/PageConnector';
import PagesWrapper from '../../../UI/pagewrapper/PagesWrapper';
import './../../../Styles/Main/RentalPage/Rental.scss'
import RentalBikeType from './RentalBikeType';
import RentalHeader from './RentalHeader';
import RentalSelectedBike from './RentalSelectedBike';
import RentalTime from './RentalTime';

function Rental({...props}) {



   const [isSelectedTypeBike, setIsSelectedTypeBike] = useState(false);
   const [selectedTypeOfBike, setSelectedTypeOfBike] = useState([]);
   const [changeChoise, setChangeChoise] = useState(false);

   const selectedTypeBike = (result) => {
      result ? setIsSelectedTypeBike(true) : setIsSelectedTypeBike(false);
      //result ? setChangeChoise(true) : setChangeChoise(false);
      setChangeChoise(false)
   }
   

   return (
      <div className="rental__wrapper">
         <PagesWrapper>
            <div className="rental__body">
               <RentalHeader />
               <div className="rental__date-block">
                  <RentalTime />
               </div>
            </div>
         </PagesWrapper>
         
         <PagesWrapper>
            <div className="rental__bikeType">
               <span><PageConnector /></span>
               <RentalBikeType
                  setIsSelectedTypeBike={setIsSelectedTypeBike}
                  setSelectedTypeOfBike={setSelectedTypeOfBike}
                  setChangeChoise={setChangeChoise}
               />
            </div>
         </PagesWrapper>

         <div className={isSelectedTypeBike ? "rental__selectedTypeBike-active" : "rental__selectedTypeBike"}>
            <PagesWrapper>
               <div className="rental__bikeType">
                  <span><PageConnector/></span>
                  <RentalSelectedBike
                     selectedTypeOfBike={selectedTypeOfBike}
                     changeChoise={changeChoise}
                     setChangeChoise={setChangeChoise}
                  />
               </div>
            </PagesWrapper>
         </div>
      </div>
   );
}
export default Rental;