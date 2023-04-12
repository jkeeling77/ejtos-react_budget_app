import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, Currency, expenses } = useContext(AppContext);

    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
    
        if(val>20000) {
            alert("Budget cannot exceed 20,000");
        }
        else if(val<totalExpenses) {
            alert("You cannot reduce the budget that is already allocated");
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency} </span>
             <input
                required='required'
                type='number'
                value={budget}
                step='10'
                style={{size: 10}}
                onChange={(event) => changeBudget(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;
