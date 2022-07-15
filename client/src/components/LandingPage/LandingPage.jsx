import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import sliderLanding1 from '../../assets/SliderLanding/sliderLanding2.jpg';
import sliderLanding2 from '../../assets/SliderLanding/sliderLanding1.jpg';
import sliderLanding3 from '../../assets/SliderLanding/sliderLanding3.jpg';
import sliderLanding4 from '../../assets/SliderLanding/sliderLanding5.jpg';
import GameOver from '../../assets/SliderLanding/GameOver.jpg';
import logoFb from '../../assets/Logos/logoFb.png';
import logoGH from '../../assets/Logos/logoGH.png';
import logoIg from '../../assets/Logos/logoIg.png';
import logoTw from '../../assets/Logos/logoTw.png';

const LandingPage = () => {
     return (
          <div className={styles.container}>
               <div className={styles.logos_pc}>
                    <a href="https://twitter.com/AgusManu_" rel="noreferrer" target="_blank">
                         <div className={styles.logo}>
                              <img src={logoTw} alt="Twitter" />
                         </div>
                    </a>
                    <a
                         href="https://www.instagram.com/new.affection_/"
                         rel="noreferrer"
                         target="_blank"
                    >
                         <div className={styles.logo}>
                              <img src={logoIg} alt="Instagram" />{' '}
                         </div>
                    </a>
                    <a
                         href="https://www.facebook.com/agustin.ojeda.9256"
                         rel="noreferrer"
                         target="_blank"
                    >
                         <div className={styles.logo}>
                              <img src={logoFb} alt="Facebook" />{' '}
                         </div>
                    </a>
                    <a href="https://github.com/xA6V5x" rel="noreferrer" target="_blank">
                         <div className={styles.logo}>
                              <img src={logoGH} alt="GitHub" />{' '}
                         </div>
                    </a>
               </div>

               <div className={styles.home_info}>
                    <h1>GAME OVER</h1>

                    <img src={GameOver} className={styles.img_gameover} alt="" />

                    <p>
                         Game Over is a videogame digital distribution service developed by <br />{' '}
                         <a
                              href="https://github.com/xA6V5x"
                              rel="noreferrer"
                              target="_blank"
                              className={styles.a6v5}
                         >
                              {' '}
                              xA6V5x Corporation.{' '}
                         </a>{' '}
                    </p>

                    <Link className={styles.container_link} to={'/Home'}>
                         <button>
                              <span className={styles.enter}>GET STARTED</span>
                              <i></i>
                         </button>
                    </Link>

                    <div className={styles.logos_responsive}>
                         <a href="https://twitter.com/AgusManu_" rel="noreferrer" target="_blank">
                              <div className={styles.logo}>
                                   <img src={logoTw} alt="Twitter" />
                              </div>
                         </a>
                         <a
                              href="https://www.instagram.com/new.affection_/"
                              rel="noreferrer"
                              target="_blank"
                         >
                              <div className={styles.logo}>
                                   <img src={logoIg} alt="Instagram" />{' '}
                              </div>
                         </a>
                         <a
                              href="https://www.facebook.com/agustin.ojeda.9256"
                              rel="noreferrer"
                              target="_blank"
                         >
                              <div className={styles.logo}>
                                   <img src={logoFb} alt="Facebook" />{' '}
                              </div>
                         </a>
                         <a href="https://github.com/xA6V5x" rel="noreferrer" target="_blank">
                              <div className={styles.logo}>
                                   <img src={logoGH} alt="GitHub" />{' '}
                              </div>
                         </a>
                    </div>
               </div>

               <div className={styles.slider_frame}>
                    <ul>
                         <li>
                              <img src={sliderLanding1} alt="" />
                         </li>
                         <li>
                              <img src={sliderLanding2} alt="" />
                         </li>
                         <li>
                              <img src={sliderLanding3} alt="" />
                         </li>
                         <li>
                              <img src={sliderLanding4} alt="" />
                         </li>
                    </ul>
               </div>
          </div>
     );
};

export default LandingPage;
