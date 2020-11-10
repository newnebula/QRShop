// import React, {useState} from 'react';
import PromoTile from './PromoTile.js';
import CSS from './Payment.module.css';
import { Link } from 'react-router-dom';

const Payment = props =>{


  return (
    <div className={CSS.Payment}>
     <div className={CSS.Text}>Je heb een promotie gekozen.</div>
     <div className={CSS.Text}>Ga verder met het afrekenen en wij tellen er nieuwe punten bij!</div>

    </div>
  );
}

export default Payment;
