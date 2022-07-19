import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre, setCurrentPage } from '../../../redux/actions';
import styles from './FilterGenre.module.css';

const FilterGenre = () => {
     const dispatch = useDispatch();
     const genres = useSelector((state) => state.genres);

     function handleFilterByGenre(e) {
          e.preventDefault();
          dispatch(setCurrentPage(1));
          dispatch(filterByGenre(e.target.value));
     }

     return (
          <div className={styles.container}>
               <h3>Genre</h3>
               <select onChange={(e) => handleFilterByGenre(e)}>
                    <option value="all">All</option>
                    {genres.map((genre) => {
                         return (
                              <option value={genre.name} key={genre.id}>
                                   {genre.name}
                              </option>
                         );
                    })}
               </select>
          </div>
     );
};

export default FilterGenre;
