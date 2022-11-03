import React from 'react';
import classes from './MyButton.module.scss';

function MyButton(props) {
   return (
      <button className={classes.MyButton} {...props}>
         {props.children}
      </button>
   );
}
export default MyButton;