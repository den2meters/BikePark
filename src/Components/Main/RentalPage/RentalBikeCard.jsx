import React from 'react';
import './../../../Styles/Main/RentalPage/RentalBikeCard.scss';
import MyButton from '../../../UI/button/MyButton';

function RentalBikeCard({ ...props }) {

   return (
      <div className='rentalBikeCard__wrapper'>
         <div className="rentalBikeCard__body">
            <div className="rentalBikeCard__title">
               <div className="rentalBikeCard__size signature">{ props.size }</div>
               <div className="rentalBikeCard__brend signature">{ props.brend }</div>
            </div>
            <div className="rentalBikeCard__image">
               <img src={"./image/" + props.image} alt="" />
            </div>
            <div className="rentalBikeCard__typeBike text">
               { props.typeBike }
            </div>
            <div className="rentalBikeCard__fullName text">
               {props.fullName}
            </div>
            <div className="rentalBikeCard__price color-text">{ props.price }</div>
            <div className="rentalBikeCard__button">
               <MyButton>Select</MyButton>
            </div>
         </div>
      </div>
   );
}
export default RentalBikeCard;