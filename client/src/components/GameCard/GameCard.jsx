import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

export default function GameCard({ id, name, img, genres }) {
     return (
          <Link to={'/videogame/' + id}>
               <div className={styles.gameCard}>
                    <img className={styles.gameImage} src={img} alt={`Game`} height="140px" />
                    <div className={styles.titleArea}>
                         <h4 className={styles.gameName}>{name}</h4>
                    </div>
                    <div className={styles.infoArea}>
                         {genres ? (
                              <h5 className={styles.gameGenre}>
                                   {genres.map((genres) => `${genres.name} `).join(', ')}
                              </h5>
                         ) : (
                              <br />
                         )}
                    </div>
                    <div className={styles.shadow}></div>
               </div>
          </Link>
     );
}
