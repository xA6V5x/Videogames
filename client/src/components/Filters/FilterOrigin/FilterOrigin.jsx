import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByOrigin, setCurrentPage } from '../../../redux/actions';
import styles from './FilterOrigin.module.css';

const FilterOrigin = () => {
     const dispatch = useDispatch();

     function handleFilterByOrigin(e) {
          dispatch(setCurrentPage(1));
          dispatch(filterByOrigin(e.target.value));
     }
     return (
          <div className={styles.container}>
               <h3>Origin</h3>
               <select
                    onChange={(e) => {
                         handleFilterByOrigin(e);
                    }}
               >
                    <option defaultValue value="all">
                         All
                    </option>
                    <option value="created">My Games</option>
                    <option value="api">Api</option>
               </select>
          </div>
     );
};

export default FilterOrigin;
