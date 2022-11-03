import React from 'react';
import './../../Styles/Main/Feedback.scss';
import logo from './images/feedback-logo.svg';

function Feedback(props) {
   return (
      <div className='feedback__wrapper'>
         <div className="feedback__body">
            <div className="feedback__text text">{props.text}</div>
            <div className="feedback__person">
               <div className="feedback__logo">
                  <img src={logo} alt="logo"/>
               </div>
               <div className="feedback__name signature">{ props.name }</div>
            </div>
         </div>
      </div>
   );
}
export default Feedback;