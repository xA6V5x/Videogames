import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGameByName } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = () => {
     const [gameState, setGameState] = useState('');
     const dispatch = useDispatch();

     function handleClick(e) {
          e.preventDefault();
          if (gameState.length === 0) {
               return alert('Please include a name');
          } else {
               dispatch(getGameByName(gameState));
               setGameState('');
               return alert('Looking for Games, please wait...');
          }
     }

     return (
          <div className={styles.input_group}>
               <input
                    required=""
                    type="text"
                    name=""
                    autoComplete="off"
                    className={styles.input}
                    onChange={(e) => setGameState(e.target.value)}
               />
               <label className={styles.user_label}>Search Game</label>
               <button className={styles.searchButton} type="submit" onClick={handleClick}>
                    <svg width="25" height="25" x="0" y="0" viewBox="0 0 24 24">
                         <g>
                              <path
                                   d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
                                   fill="#ffffff"
                                   data-original="#000000"
                              />
                         </g>
                    </svg>
               </button>
          </div>
     );
};

export default SearchBar;
