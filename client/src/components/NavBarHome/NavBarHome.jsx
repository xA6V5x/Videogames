import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getVideogames, getGenres } from '../../redux/actions/index.js';

import OrderAlphabetical from '../Filters/OrderAlphabetical/OrderAlphabetical.jsx';
import OrderRating from '../Filters/OrderRating/OrderRating.jsx';
import FilterOrigin from '../Filters/FilterOrigin/FilterOrigin.jsx';
import FilterGenre from '../Filters/FilterGenre/FilterGenre.jsx';
import FilterRating from '../Filters/FilterRating/FilterRating.jsx';

import SearchBar from '../SearchBar/SearchBar';
import GameOver from '../../assets/SliderLanding/GameOver.jpg';
// import iconHome from '../../assets/IconsNav/iconHome.png';
import iconAddGame from '../../assets/IconsNav/iconAddGame.png';
import iconAllGames from '../../assets/IconsNav/iconAllGames.png';
import iconSort from '../../assets/IconsNav/iconSort.png';
import iconFilters from '../../assets/IconsNav/iconFilters.png';
import styles from './NavBarHome.module.css';

const NavBar = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getVideogames());
          dispatch(getGenres());
     }, [dispatch]);

     function handleClick() {
          window.location.href = window.location.href;
     }

     return (
          <div className={styles.container}>
               <div className={styles.sidemenu}>
                    {/* ---------------profile------------- */}
                    <div className={styles.profile}>
                         <Link to="/" className={styles.photo}>
                              <img src={GameOver} alt="img Game Over" />
                         </Link>
                    </div>

                    {/* ---------------items---------------- */}
                    <div className={styles.menu_items}>
                         <div className={styles.item}>
                              <button
                                   className={styles.button_gamesAll}
                                   onClick={() => handleClick()}
                              >
                                   <div className={styles.icon}>
                                        <img src={iconAllGames} alt="icon" />
                                   </div>
                                   <div className={styles.title}>
                                        <span>All Games</span>
                                   </div>
                              </button>
                         </div>
                         <div className={styles.item}>
                              <Link to="/NewGame" className={styles.button_gamesAll}>
                                   <div className={styles.icon}>
                                        <img src={iconAddGame} alt="icon" />
                                   </div>
                                   <div className={styles.title}>
                                        <span>New Game</span>
                                   </div>
                              </Link>
                         </div>
                    </div>
                    <div className={styles.menu_items}>
                         <div className={styles.item}>
                              <SearchBar />
                         </div>
                    </div>
                    <div className={styles.menu_items}>
                         <div className={styles.item_filter_portada}>
                              <div className={styles.icon_sort}>
                                   <img src={iconSort} alt="icon" />
                              </div>
                              <div className={styles.title}>
                                   <span> Sort By . . .</span>
                              </div>
                         </div>
                         <div className={styles.item_filter}>
                              <OrderAlphabetical />
                         </div>
                         <div className={styles.item_filter}>
                              <OrderRating />
                         </div>
                    </div>
                    <div className={styles.menu_items}>
                         <div className={styles.item_filter_portada}>
                              <div className={styles.icon}>
                                   <img src={iconFilters} alt="icon" />
                              </div>
                              <div className={styles.title}>
                                   <span>Filter By . . .</span>
                              </div>
                         </div>
                         <div className={styles.item_filter_one}>
                              <FilterOrigin />
                         </div>
                         <div className={styles.item_filter}>
                              <FilterGenre />
                         </div>
                         <div className={styles.item_filter}>
                              <FilterRating />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default NavBar;
