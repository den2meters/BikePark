import React from 'react';
import '../../Styles/Main.scss';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider} from 'react-router-dom';
import { pagesRoutes } from './../../Constant/index.js';
import Error from './Error';
import { RentalDateGlobal } from '../../Constant/context';
import { useState } from 'react';

function Main() {

   const [selectedDateGlobal, setSelectedDateGlobal] = useState('');

   return (
      <div className='main__wrapper'>
         <RentalDateGlobal.Provider value={{
            selectedDateGlobal,
            setSelectedDateGlobal,
         }}>
            <Routes>
               {pagesRoutes.map((route, index) => 
                  <Route
                     key={index}
                     element={route.element}
                     path={route.path}
                     exact={route.exact}
                  />
               )}
               <Route path='*' element={<Error/>} />
            </Routes>
         </RentalDateGlobal.Provider>
      </div>
   );
}
export default Main;