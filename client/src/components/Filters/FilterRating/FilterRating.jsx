import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByRating, setCurrentPage } from '../../../redux/actions';
import styles from './FilterRating.module.css';

const FilterRating = () => {
     const dispatch = useDispatch();

     function hendleFilterByRating(e) {
          e.preventDefault();
          dispatch(setCurrentPage(1));
          dispatch(filterByRating(e.target.value));
     }

     return (
          <div className={styles.container}>
               <h3>Rating</h3>
               <select
                    onChange={(e) => {
                         hendleFilterByRating(e);
                    }}
               >
                    <option defaultValue value="all">
                         All
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
               </select>
          </div>
     );
};

export default FilterRating;
