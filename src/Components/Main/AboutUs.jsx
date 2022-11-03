import React, { useEffect, useState, useRef } from 'react';
import PagesWrapper from './../../UI/pagewrapper/PagesWrapper';
import './../../Styles/Main/AboutUs.scss';
import Feedback from './Feedback';
import {clientFeedbacks} from '../../Constant'

function AboutUs() {

   const [largeScreen, smallScren] = [796, 631 ]

   const widthWindow = useRef();
   const feedbackHeight = useRef();
   const [carouselWindowHeight, setCarouselWindowHeight] = useState('')
   const [slideWidth, setSlideWidth] = useState('');
   const [slidesGap, setSlidesGap] = useState(40);
   const [moveLine, setMoveLine] = useState(0);
   const [slideIndex, setSlideIndex] = useState(0)
   const [amountDots, setAmountDots] = useState(4);

   useEffect(() => {
      setCarouselWindowHeight(feedbackHeight.current.clientHeight);
      if (window.innerWidth > largeScreen) {
         setSlidesGap(40);
         setSlideWidth((widthWindow.current.clientWidth - slidesGap * 2) / 3)
      }
      if (window.innerWidth < largeScreen) {
         setSlidesGap(30);
         setSlideWidth((widthWindow.current.clientWidth-slidesGap) / 2)
      }
      if (window.innerWidth < smallScren) {
         setSlidesGap(0);
         setSlideWidth(widthWindow.current.clientWidth)
      }
      window.addEventListener('resize', () => {
         setMoveLine(0)
         if (window.innerWidth > largeScreen) {
            setAmountDots(4);
            setSlidesGap(40);
            setSlideWidth((widthWindow.current.clientWidth - slidesGap * 2) / 3)
         }
         if (window.innerWidth < largeScreen) {
            setAmountDots(5);
            setSlidesGap(30);
            setSlideWidth((widthWindow.current.clientWidth-slidesGap) / 2)
         }
         if (window.innerWidth < smallScren) {
            setAmountDots(6);
            setSlidesGap(0);
            setSlideWidth(widthWindow.current.clientWidth)
         }
      })
      
   })
   
   const moveRight = () => {
      slideIndex >= amountDots-1 ? setSlideIndex(slideIndex) : setSlideIndex(slideIndex + 1);

      if (window.innerWidth > largeScreen) { moveLine === -((slideWidth + slidesGap) * 3) ? setMoveLine(moveLine) : setMoveLine(moveLine - slideWidth - slidesGap) }
      if (window.innerWidth < largeScreen) { moveLine === -((slideWidth + slidesGap) * 4) ? setMoveLine(moveLine) : setMoveLine(moveLine - slideWidth - slidesGap) }
      if (window.innerWidth < smallScren) { moveLine === -((slideWidth + slidesGap) * 5) ? setMoveLine(moveLine) : setMoveLine(moveLine - slideWidth - slidesGap) }

   }
   const moveLeft = () => {
      slideIndex < 1 ? setSlideIndex(slideIndex) : setSlideIndex(slideIndex - 1);
      slideIndex === 0 ? setMoveLine(0) : setMoveLine(moveLine+slideWidth+slidesGap)
   }

   return (
      <div className="aboutus__wrapper">
         <PagesWrapper>
            <div className="aboutus__general general">
               <div className="general__subtitle title-h1">
                  About Us
               </div>
               <div className="general__information">
                  <div className="general__text text">
                     Ultimately, only one thing counts for us: the perfect ride.
                     With our online booking platform, you have access to more than 20.000 bikes across Ukraine.
                     We want you to be able to rent the right bike for any terrain — from city cruisers to high-end mountain bikes — anytime, anywhere.
                     And if you have a cool bike that you want to share, you can simply list it on our online platform.
                     We bring bike owners and renters together in a way that benefits both sides.
                     Whether you’re a private or a commercial renter, an ambitious sportsman or a recreational cruiser, we all have one thing in common — the love for bicycles!                     
                  </div>
                  <div className="general__images">
                     <img src={require ('./images/aboutus.jpg')} alt="" />
                  </div>
               </div>
            </div>
         </PagesWrapper>
         <PagesWrapper>
            <div className="aboutus__feedback feedback">
               <div className="feedback__subtitle subtitle">
                  Reviews
               </div>
               <div className="feedback__carousel">
                  <div
                     ref={widthWindow}
                     className="feedback__carousel-window"
                     style={{ height: `${carouselWindowHeight}px` }}
                  >
                     <div
                        className="feedback__line"
                        ref={feedbackHeight}
                        style={{ columnGap: `${slidesGap}px`, transform: `translate(${moveLine}px, ${0}px)`}}
                     >
                        {clientFeedbacks.map((item, index) => (
                           <div
                              key={index}
                              className="feedback__item"
                              style={{ width: `${slideWidth}px` }}
                           >
                              <Feedback name={item.name} text={item.text } />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="feedback__navigation">
                  <div className='feedback__arrow-left feedback__arrow arrow' onClick={moveLeft}>&#x276E;</div>
                  {Array.from({ length: amountDots }).map((item, index) => (
                     <div
                        key={index}
                        className={slideIndex === index ? 'feedback__dot feedback__dot-active' : 'feedback__dot'}
                     ></div>
                  ))}
                  <div className='feedback__arrow-right feedback__arrow arrow' onClick={moveRight}>&#x276F;</div>
               </div>
            </div>
         </PagesWrapper>
         </div>
   );
}
export default AboutUs;