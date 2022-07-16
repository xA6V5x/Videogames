import React from 'react';
import GameCard from '../GameCard/GameCard';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames, getGenres } from '../../redux/actions';
import styles from './GamesContainer.module.css';
import Spinner from '../Spinner/Spinner';

const GamesContainer = () => {
     const dispatch = useDispatch();
     const allGames = useSelector((state) => state.allGames);
     const [currentPage, setCurrentPage] = useState(1);
     const [gamesPerPage] = useState(15);
     const indexOfLastGame = currentPage * gamesPerPage;
     const indexOfFirstGame = indexOfLastGame - gamesPerPage;
     const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);
     const pagination = (pageNumber) => {
          setCurrentPage(pageNumber);
     };

     useEffect(() => {
          dispatch(getVideogames());
          dispatch(getGenres());
     }, [dispatch]);

     return (
          <div className={styles.container}>
               {allGames.length > 0 ? (
                    <div className={styles.container}>
                         <div className={styles.gamesArea}>
                              <Pagination
                                   gamesPerPage={gamesPerPage}
                                   allGames={allGames.length}
                                   pagination={pagination}
                                   currentPage={currentPage}
                              />
                              <div className={styles.pagination}></div>
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
                         </div>
                    </div>
               ) : (
                    <Spinner />
               )}
          </div>
     );
};

export default GamesContainer;
