import React, { useState } from 'react';
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

import Menu from '../../assets/Menu/Menu.png';
// import iconHome from '../../assets/IconsNav/iconHome.png';
import iconAddGame from '../../assets/IconsNav/iconAddGame.png';
import iconAllGames from '../../assets/IconsNav/iconAllGames.png';
import iconSort from '../../assets/IconsNav/iconSort.png';
import iconFilters from '../../assets/IconsNav/iconFilters.png';
import styles from './NavBarMobile.module.css';

const NavBarMobile = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getVideogames());
          dispatch(getGenres());
     }, [dispatch]);

     const [isOpen, setOpen] = useState(false);

     const handleModalContainerClick = (e) => {
          e.stopPropagation();
     };

     function handleClick() {
          window.location.href = window.location.href;
     }

     return (
          <div className={styles.container}>
               <div className={styles.header_container}>
                    <div className={styles.item}>
                         <SearchBar />
                    </div>
                    <div className={styles.button_modal} onClick={() => setOpen(true)}>
                         <img src={Menu} alt="Menu" />
                    </div>
               </div>
               <div
                    onClick={() => setOpen(false)}
                    className={isOpen === true ? styles.menu_container : styles.none}
               >
                    <div onClick={handleModalContainerClick} className={styles.menu_background}>
                         <div className={styles.sidemenu}>
                              {/* ------------Close Modal------------  */}
                              <div className={styles.button_modal_container}>
                                   <div
                                        className={styles.button_modal}
                                        onClick={() => setOpen(false)}
                                   >
                                        <img src={Menu} alt="Menu" />
                                   </div>
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
               </div>
          </div>
     );
};

export default NavBarMobile;
