import React from 'react';
import './BlockSubstrate.scss'; 

function BlockSubstrate(props) {
   return (
      <div className='blocksubstrate__wrapper' >
         <div className="blocksubstrate__container">
            <div className="blocksubstrate__body" {...props}>
               {props.children}
            </div>
         </div>
      </div>
   );
}
export default BlockSubstrate;