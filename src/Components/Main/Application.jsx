import React from 'react';
import './../../Styles/Main/Application.scss';
import MyButton from './../../UI/button/MyButton'
import { useState } from 'react';
import MyInput from '../../UI/input/MyInput';
import BlockSubstrate from '../../UI/blocksubstrate/BlockSubstrate';

function Application() {

   const [submition, setSubmition] = useState(0);
   const [refused, setRefused] = useState(0);
   const [nameValue, setNameValue] = useState('');
   const [numberValue, setNumberValue] = useState('');
   const [colorName, setColorName] = useState('#DDE3EB')
   const [colorNumber, setColorNumber] = useState('#DDE3EB')
   const [placeholderName, setplaceholderName] = useState('*Name')
   const [placeholderNumber, setplaceholderNumber] = useState('*Number')


   const submitApplication = (e) => {
      e.preventDefault();
      
      if ((/^[0-9]+$/i.test(numberValue)) && (/^[a-zA-Z]+$/i.test(nameValue))) {
         setSubmition(1);
         setTimeout(() => {
            setSubmition(0);
         }, 2000)
         setNameValue('');
         setNumberValue('');
         setColorNumber('')
         setColorName('')
         setplaceholderName('*Name');
         setplaceholderNumber('*Number')

      } else {
         if (!(/^[0-9]+$/i.test(numberValue))) {
            setColorNumber('#ff0000')
            setNumberValue('');
            setplaceholderNumber('Only number 0-9')
         }
         if (!(/^[a-zA-Z]+$/i.test(nameValue))) {
            setColorName('#ff0000')
            setplaceholderName('Only letter A-Z a-z');
            setNameValue('')
         }
         setRefused(1);
         setTimeout(() => {
            setRefused(0);
            setColorName('#DDE3EB');
            setColorNumber('#DDE3EB');
         }, 2000)
         
         
      }
      
   }

   return (
      <div className='application__wrapper'>
         <div className="application__body">
            <div className="application__title">
               <div className="application__subtitle signature">Submit your applicationr</div>
               <div className="application__value text">If you have questions please do contact us.</div>
            </div>
            <form className="application__form">
               <div className="application__name">
                  <BlockSubstrate style={{border: `1px solid ${colorName}`}}>
                     <MyInput
                        type="text"
                        placeholder={placeholderName}
                        value={nameValue}
                        onChange={event => setNameValue(event.target.value)}
                     />
                  </BlockSubstrate>
               </div>
               <div className="application__number">
                  <BlockSubstrate style={{border: `1px solid ${colorNumber}`}}>
                     <MyInput
                        type="tell"
                        placeholder={placeholderNumber}
                        value={numberValue}
                        onChange={event => setNumberValue(event.target.value)}
                     />
                  </BlockSubstrate>
               </div>
               <label className="application__personal-info">
                  <input type="checkbox" className="application__check" id='application-checkbox' />
                  <span className="application__fake-checkbox"></span>
                  <span htmlFor='application-checkbox' className="application__confirmation text">Consent to personal data processing</span>
               </label>
               <div className="application__button">
                     <MyButton
                        onClick={submitApplication}
                     >
                        Send
                     </MyButton>
                  <div style={{ opacity: `${submition}` }} className="application__submition submited">Successfully sent</div>
                  <div style={{opacity: `${refused}`}} className="application__refused refused">Refused</div>
               </div>
            </form>
         </div>
      </div>
   );
}
export default Application;