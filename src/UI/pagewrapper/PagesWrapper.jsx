import React from 'react';
import './PagesWrapper.scss'

function PagesWrapper(props) {
   return (
      <div className='pages__wrapper'>
         <div className="pages__container container">
            <div className="pages__body">
               {props.children}
            </div>
         </div>
      </div>
   );
}
export default PagesWrapper;