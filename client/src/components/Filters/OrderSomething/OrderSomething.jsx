import React from 'react';
import { useDispatch } from 'react-redux';
import { orderBySomething, setCurrentPage } from '../../../redux/actions';
import styles from './OrderSomething.module.css';

const OrderSomething = () => {
     const dispatch = useDispatch();

     function handleClickOrder(e) {
          e.preventDefault();
          dispatch(setCurrentPage(1));
          dispatch(orderBySomething(e.target.value));
     }

     return (
          <div className={styles.container}>
               <div className={styles.title}>
                    <span>Alphabetically or Rating</span>
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
                    <option value="Min-Max">Min-Max</option>
                    <option value="Max-Min">Max-Min</option>
               </select>
          </div>
     );
};

export default OrderSomething;
