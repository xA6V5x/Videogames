import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByRating } from '../../../redux/actions';
import styles from './OrderRating.module.css';

const OrderRating = () => {
     const dispatch = useDispatch();

     function handleClickOrder(e) {
          e.preventDefault();
          dispatch(orderByRating(e.target.value));
     }

     return (
          <div className={styles.container}>
               <div className={styles.title}>
                    <span>or Rating</span>
               </div>

               <select
                    onChange={(e) => {
                         handleClickOrder(e);
                    }}
               >
                    <option defaultValue value="Random">
                         Random
                    </option>
                    <option value="Min-Max">Min-Max</option>
                    <option value="Max-Min">Max-Min</option>
               </select>
          </div>
     );
};

export default OrderRating;
