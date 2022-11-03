import React from 'react';
import { useContext } from 'react';
import { RentalDateGlobal } from '../../../Constant/context';
import PagesWrapper from '../../../UI/pagewrapper/PagesWrapper';

function RentalRequest(props) {

   const  {selectedDateGlobal } = useContext(RentalDateGlobal)

   return (
      <div className=''>
         <PagesWrapper>
            {selectedDateGlobal}
         </PagesWrapper>
      </div>
   );
}
export default RentalRequest;