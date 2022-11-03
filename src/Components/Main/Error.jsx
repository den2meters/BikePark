import React from 'react';
import MyButton from '../../UI/button/MyButton';
import {pagesRoutes} from '../../Constant/index.js'
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider} from 'react-router-dom';
import './../../Styles/Main/Error.scss';

function Error() {
   return (
      <div className='error__wrapper'>
         <div className="error__body">
            <div className="error__numberOfError">404</div>
            <div className="error__info">The page does not exist or has not created yet</div>
            <div className="error__backToMain">
               <Link to={pagesRoutes[pagesRoutes.length -1].path}>
                  <MyButton
                     style={{ fontSize: '20px', fontWeight: '700' }}
                  >
                     Back to Main page
                  </MyButton>
               </Link>
            </div>
         </div>         
      </div>
   );
}
export default Error;