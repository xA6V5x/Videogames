import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByAlphabetical } from '../../../redux/actions';
import styles from './OrderAlphabetical.module.css';

const OrderAlphabetical = () => {
     const dispatch = useDispatch();

     function handleClickOrder(e) {
          e.preventDefault();
          dispatch(orderByAlphabetical(e.target.value));
     }

     return (
          <div className={styles.container}>
               <div className={styles.title}>
                    <span>Alphabetically</span>
               </div>
               <select
                    onChange={(e) => {
                         handleClickOrder(e);
                    }}
               >
                    <option defaultValue value="Random">
                         Random
                    </option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
               </select>
          </div>
     );
};

export default OrderAlphabetical;
