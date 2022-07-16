import React from 'react';
import { Link } from 'react-router-dom';
import Star from '../../assets/Star/Star.png';
import styles from './GameCard.module.css';

const GameCard = ({ id, name, img, genres, rating }) => {
     // const stars = '✯ '.repeat(rating);
     let arrayStars = [];
     (() => {
          let ratingCont = rating;
          if (rating) {
               while (ratingCont > 0) {
                    ratingCont = ratingCont - 1;
                    arrayStars.push('newStar');
               }
               return arrayStars;
          }
          return rating;
     })();

     return (
          <Link to={'/videogame/' + id}>
               <div className={styles.gameCard}>
                    <img className={styles.gameImage} src={img} alt={name} />
                    <div className={styles.titleArea}>
                         <h4 className={styles.gameName}>{name}</h4>
                    </div>
                    <div className={styles.infoArea}>
                         {genres ? (
                              <h5 className={styles.gameGenre}>
                                   {genres.map((genres) => `${genres.name} `).join(', ')}
                                   {/* <br />
                                   {stars} */}
                              </h5>
                         ) : (
                              <br />
                         )}
                    </div>
                    <div className={styles.starsArea}>
                         {arrayStars.map((cantidadStars) => (
                              <img src={Star} className={styles.star_img} alt="stars" />
                         ))}
                    </div>
                    <div className={styles.shadow}></div>
               </div>
          </Link>
     );
};

export default GameCard;
