import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import GameCard from '../GameCard/GameCard';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import iconCreateGame from '../../assets/IconsNav/iconCreateGame.png';
import styles from './GamesContainer.module.css';

const GamesContainer = () => {
     const allGames = useSelector((state) => state.allGames);

     const gamesIsEmpty = useSelector((state) => state.gamesIsEmpty);
     const [currentPage, setCurrentPage] = useState(1);
     const [gamesPerPage] = useState(15);
     const indexOfLastGame = currentPage * gamesPerPage;
     const indexOfFirstGame = indexOfLastGame - gamesPerPage;
     const currentGames =
          allGames.length > 0 ? allGames.slice(indexOfFirstGame, indexOfLastGame) : [];

     const pagination = (pageNumber) => {
          setCurrentPage(pageNumber);
     };

     return (
          <div className={styles.container}>
               {typeof gamesIsEmpty === 'string' ? (
                    gamesIsEmpty == 'There are no games in the api with those characteristics' ? (
                         <div className={styles.container}>
                              <div className={styles.games_alert}>
                                   <h1>{gamesIsEmpty}</h1>
                              </div>
                         </div>
                    ) : (
                         <div className={styles.container}>
                              <div className={styles.games_alert}>
                                   <h1>{gamesIsEmpty}</h1>
                                   <h2>Create games to see them here</h2>
                                   <Link to="/NewGame">
                                        <div className={styles.games_alert_text}>
                                             <div className={styles.icon}>
                                                  <img src={iconCreateGame} alt="icon" />
                                             </div>
                                             <div className={styles.title}>
                                                  <span>Create Game</span>
                                             </div>
                                        </div>
                                   </Link>
                              </div>
                         </div>
                    )
               ) : allGames.length > 0 ? (
                    <div className={styles.container}>
                         <div className={styles.gamesArea}>
                              <div className={styles.pagination}>
                                   <Pagination
                                        gamesPerPage={gamesPerPage}
                                        allGames={allGames.length}
                                        pagination={pagination}
                                        currentPage={currentPage}
                                   />
                              </div>
                              {currentGames.map((data) => {
                                   return (
                                        <GameCard
                                             key={data.id}
                                             id={data.id}
                                             name={data.name}
                                             img={data.img}
                                             genres={data.genres}
                                             rating={data.rating}
                                        />
                                   );
                              })}
                              <div
                                   className={
                                        allGames.length > 15
                                             ? styles.pagination_responsive
                                             : styles.pagination_none
                                   }
                              >
                                   <Pagination
                                        gamesPerPage={gamesPerPage}
                                        allGames={allGames.length}
                                        pagination={pagination}
                                        currentPage={currentPage}
                                   />
                              </div>
                         </div>
                    </div>
               ) : (
                    <Spinner />
               )}
          </div>
     );
};

export default GamesContainer;
