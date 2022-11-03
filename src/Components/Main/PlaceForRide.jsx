import React from 'react';
import PagesWrapper from './../../UI/pagewrapper/PagesWrapper';
import './../../Styles/Main/PlaceForRide.scss';


function PlaceForRide() {



   return (
      <div className="placeforride__wrapper">
         <PagesWrapper>
            <div className="placeforride__cityride cityride">
               <h1 className="cityride__title title-h1">
                  Where you can go for a ride
               </h1>
               <div className="cityride__subtitle subtitle">
                  City riding
               </div>
               <div className="cityride__text text">
                  Bicycle rental on Ave. Bazhana and Akhmatova - Conveniently located for cycling thanks to the bike path that runs along the entire Bazhana avenue. We recommend taking a walk to the Partizanska Slava Park and rolling along the path of health in the pleasant freshness of the forest. For lovers of off-road and cross-country driving, you can go to Tyaglo lake and nearby quarries in the area of ​​St. Collector's A longer trip can be planned along the Dnieper to the Rusanivska embankment, to the Rusaniv canals. For beginners and beginner cyclists, we recommend Poznyaki Park and the lake near it with good road surface. For trained athletes and good cardio training, we recommend a trip along the Boryspil track with a wide shoulder and excellent asphalt surface.
               </div>
               <div className="cityride__galery">
                  <div className="cityride__galery-items">
                     <div className="cityride__galery-item">
                        <img src={require ('./images/ride_place_1.jpg')} alt="" />
                     </div>
                     <div className="cityride__galery-item">
                        <img src={require ('./images/ride_place_2.jpg')} alt="" />
                     </div>
                     <div className="cityride__galery-item">
                        <img src={require ('./images/ride_place_3.jpg')} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </PagesWrapper>
         <PagesWrapper>
            <div className="placeforride__natureride natureride">
               <div className="natureride__subtitle subtitle">
                  Nature riding
               </div>
               <div className="natureride__information">
                  <div className="natureride__text text">
                     For lovers of off-road and cross-country driving, you can go to Tyaglo lake and nearby quarries in the area of ​​St. Collector's A longer trip can be planned along the Dnieper to the Rusanivska embankment, to the Rusaniv canals.                     
                  </div>
                  <div className="natureride__images">
                     <img src={require ('./images/ride_place_4.jpg')} alt="" />
                  </div>
               </div>
               <div className="natureride__subtitle subtitle">
                  Gallery
               </div>
               <div className="natureride__galery">
                  <div className="natureride__columns">
                     <div className="natureride__item">
                        <div className="natureride__image">
                           <img src={require ('./images/ride_place_5.jpg')} alt="" />
                        </div>
                        <div className="natureride__describtion text">
                           Roads for experienced riders
                        </div>
                     </div>
                     <div className="natureride__item">
                        <div className="natureride__image">
                           <img src={require ('./images/ride_place_6.jpg')} alt="" />
                        </div>
                        <div className="natureride__describtion text">
                           Cycling in the forest
                        </div>
                     </div>
                     <div className="natureride__item">
                        <div className="natureride__image">
                           <img src={require ('./images/ride_place_7.jpg')} alt="" />
                        </div>
                        <div className="natureride__describtion text">
                           Cycling near lakes
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </PagesWrapper>
      </div>
      
   );
}
export default PlaceForRide;