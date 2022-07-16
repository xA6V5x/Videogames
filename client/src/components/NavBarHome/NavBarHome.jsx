import React from 'react';
import { Link } from 'react-router-dom';

import FilterOrigin from '../Filters/FilterOrigin/FilterOrigin.jsx';
import FilterAlfabetico from '../Filters/FilterAlfabetico/FilterAlfabetico.jsx';
import FilterGenre from '../Filters/FilterGenre/FilterGenre.jsx';
import FilterRating from '../Filters/FilterRating/FilterRating.jsx';

import SearchBar from '../SearchBar/SearchBar';
import GameOver from '../../assets/SliderLanding/GameOver.jpg';
import iconHome from '../../assets/IconsNav/iconHome.png';
import iconAddGame from '../../assets/IconsNav/iconAddGame.png';
import iconAllGames from '../../assets/IconsNav/iconAllGames.png';
import styles from './NavBarHome.module.css';

const NavBar = () => {
     function handleClick(e) {
          window.location.href = window.location.href;
     }

     return (
          <div className={styles.container}>
               <div className={styles.sidemenu && styles.menu_collapsed}>
                    {/* ---------------profile------------- */}
                    <div className={styles.profile}>
                         <Link to="/" className={styles.photo}>
                              <img src={GameOver} alt="img Game Over" />
                         </Link>
                    </div>

                    {/* ---------------items---------------- */}
                    <div className={styles.menu_items}>
                         <div className={styles.item}>
                              <Link to="/Home">
                                   <div className={styles.icon}>
                                        <img src={iconHome} alt="icon" />
                                   </div>
                                   <div className={styles.title}>
                                        <span>Home</span>
                                   </div>
                              </Link>
                         </div>
                         <div className={styles.item}>
                              <button
                                   className={styles.button_gamesAll}
                                   onClick={(e) => handleClick(e)}
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
                              <Link to="/NewGame">
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
                         <div className={styles.item}>
                              <FilterOrigin />
                         </div>
                         <div className={styles.item}>
                              <FilterAlfabetico />
                         </div>
                         <div className={styles.item}>
                              <FilterGenre />
                         </div>
                         <div className={styles.item}>
                              <FilterRating />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default NavBar;
