import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../../Styles/Footer.scss';
import facebook from './Icon/facebook.svg';
import instagram from './Icon/instagram.svg';
import { footerNavbar, footerRoutes } from './../../Constant';

function Footer() {


   return (
      <div className='footer__wrapper'>
         <div className='footer__container container'>
            <div className='footer__body'>
               <div className='footer__rental'>
                  <div className='footer__titel'>Bicycle rental</div>
                  <ul className='footer__items'>
                     <li className='footer__item'>Aluminium bike</li>
                     <li className='footer__item'>Carbon bike</li>
                     <li className='footer__item'>Mountain/city bike</li>
                     <li className='footer__item'>City economy bike</li>
                  </ul>
               </div>
               <div className="footer__menu">
                  {footerNavbar.map((item, index) => (
                     <li key={index} className="footer__menu-item">
                        <Link to={footerRoutes[index].path}>
                           {item.title}
                        </Link>
                     </li>
                  ))}
                  <div className="footer__menu-item">Feedback</div>
               </div>
               <div className="footer__name">
                  &#169; BikePark, 2022
               </div>
               <div className="footer__copyright">
                  <div className="footer__title">Privacy policy</div>
                  <div className="footer__social">
                     <a href="https://uk-ua.facebook.com/" target="_blank"><img src={ facebook } alt="Facebook" /></a>
                     <a href="https://www.instagram.com/" target="_blank"><img src={ instagram } alt="Instagram" /></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Footer;