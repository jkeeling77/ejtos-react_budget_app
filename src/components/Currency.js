import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'

const Currency = () => {
    const { Currency, dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    };

    return (
        <div className='alert alert-primary currency_container'>
        <span>Currency: {Currency} </span>
        <select name="currency" value={Currency} onChange={event=>changeCurrency(event.target.value)} className="currency_dropdown">
              <option className="currency_option" value="$">$ Dollar</option>
              <option className="currency_option" value="£">£ Pound</option>
              <option className="currency_option" value="€">€ Euro</option>
              <option className="currency_option" value="₹">₹ Ruppee</option>
          </select> 
        </div>
    );
};
export default Currency;
