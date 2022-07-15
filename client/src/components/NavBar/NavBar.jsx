import React from 'react';
import styles from './NavBar.module.css';
import GameOver from '../../assets/SliderLanding/GameOver.jpg';
import iconHome from '../../assets/IconsNav/iconHome.png';
import iconAddGame from '../../assets/IconsNav/iconAddGame.png';
import { Link } from 'react-router-dom';
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
     return (
          <div className={styles.container}>
               <div className={styles.sidemenu & styles.menu_collapsed}>
                    {/* ---------------profile------------- */}
                    <div className={styles.profile}>
                         <Link to="/" className={styles.photo}>
                              <img src={GameOver} />
                         </Link>
                    </div>

                    {/* ---------------items---------------- */}
                    <div className={styles.menu_items}>
                         <div className={styles.item}>
                              <Link to="/Home">
                                   <div className={styles.icon}>
                                        <img src={iconHome} alt="" />
                                   </div>
                                   <div className={styles.title}>
                                        <span>Home</span>
                                   </div>
                              </Link>
                         </div>
                         <div className={styles.item}>
                              <Link to="/addGame">
                                   <div className={styles.icon}>
                                        <img src={iconAddGame} alt="" />
                                   </div>
                                   <div className={styles.title}>
                                        <span>New Game</span>
                                   </div>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default NavBar;
