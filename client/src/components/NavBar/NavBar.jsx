import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetGames } from '../../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import GameOver from '../../assets/SliderLanding/GameOver.jpg';
import iconHome from '../../assets/IconsNav/iconHome.png';
import iconAddGame from '../../assets/IconsNav/iconAddGame.png';
import Menu from '../../assets/Menu/Menu.png';
import styles from './NavBar.module.css';

const NavBar = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const [isOpen, setOpen] = useState(false);

     const handleModalContainerClick = (e) => {
          e.stopPropagation();
     };

     const resetHome = () => {
          dispatch(resetGames());
          navigate('/Home');
     };
     const resetForm = () => {
          navigate('/NewGame');
          window.location.href = window.location.href;
     };

     return (
          <div className={styles.container}>
               <div className={styles.header_container}>
                    <div className={styles.button_modal} onClick={() => setOpen(true)}>
                         <img src={Menu} alt="Menu" />
                    </div>
               </div>
               {/* -------------MODAL----------------- */}
               <div
                    onClick={() => setOpen(false)}
                    className={isOpen === true ? styles.menu_container : styles.none}
               >
                    <div onClick={handleModalContainerClick} className={styles.menu_background}>
                         {/* ------------Close Modal------------  */}
                         {/* <div className={styles.button_modal_container}> */}
                         <div className={styles.button_modal} onClick={() => setOpen(false)}>
                              <img src={Menu} alt="Menu" />
                         </div>
                         {/* </div> */}
                         {/* ---------------profile------------- */}
                         <div className={styles.profile}>
                              <Link to="/" className={styles.photo}>
                                   <img src={GameOver} alt="img Game Over" />
                              </Link>
                         </div>

                         {/* ---------------items---------------- */}
                         <div className={styles.menu_items}>
                              <div className={styles.item} onClick={() => resetHome()}>
                                   <div className={styles.button_gamesAll}>
                                        <div className={styles.icon}>
                                             <img src={iconHome} alt="icon" />
                                        </div>
                                        <div className={styles.title}>
                                             <span>Home</span>
                                        </div>
                                   </div>
                              </div>
                              <div className={styles.item} onClick={() => resetForm()}>
                                   <div className={styles.button_gamesAll}>
                                        <div className={styles.icon}>
                                             <img src={iconAddGame} alt="icon" />
                                        </div>
                                        <div className={styles.title}>
                                             <span>New Game</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default NavBar;
