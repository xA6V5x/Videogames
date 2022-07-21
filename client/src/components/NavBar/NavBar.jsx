import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GameOver from '../../assets/SliderLanding/GameOver.jpg';
import iconHome from '../../assets/IconsNav/iconHome.png';
import iconAddGame from '../../assets/IconsNav/iconAddGame.png';
import styles from './NavBar.module.css';

const NavBar = () => {
     const navigate = useNavigate();

     function resetForm() {
          navigate('/NewGame');
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
                              <Link to="/Home" className={styles.button_gamesAll}>
                                   <div className={styles.icon}>
                                        <img src={iconHome} alt="icon" />
                                   </div>
                                   <div className={styles.title}>
                                        <span>Home</span>
                                   </div>
                              </Link>
                         </div>
                         <div className={styles.item} onClick={() => resetForm()}>
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
               </div>
          </div>
     );
};

export default NavBar;
