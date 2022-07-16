import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { /*deleteDetails*/ getDetails } from '../../redux/actions/index';
import NavBar from '../NavBar/NavBar';
import Spinner from '../Spinner/Spinner';
import styles from './GameDetail.module.css';

const GameDetail = () => {
     const { idGame } = useParams();
     const dispatch = useDispatch();

     const { id, name, description, released, img, rating, platforms, genres } = useSelector(
          (state) => (state.details[0] ? state.details[0] : state.details)
     );

     useEffect(() => {
          dispatch(getDetails(idGame));
     }, []);

     return (
          <div className={styles.container}>
               <NavBar />
               {idGame == id ? (
                    <div className={styles.container}>
                         <div className={styles.container_details}>
                              <h1 className={styles.title}>{name}</h1>
                              <div className={styles.details_portada}>
                                   <div className={styles.details_portada_img}>
                                        <img src={img} alt="img game" />
                                   </div>

                                   <div className={styles.details_all}>
                                        <div className={styles.details_all_text}>
                                             <h4>Platforms</h4>
                                             <h3>
                                                  {platforms
                                                       .map((platforms) => `${platforms.name} `)
                                                       .join(', ')}
                                             </h3>
                                        </div>

                                        <div className={styles.details_all_text}>
                                             <h4>{genres.length > 1 ? 'Genres' : 'Genre'}</h4>
                                             <h3>
                                                  {genres
                                                       .map((genres) => `${genres.name} `)
                                                       .join(', ')}
                                             </h3>
                                        </div>

                                        <div
                                             className={
                                                  released ? styles.details_all_text : styles.none
                                             }
                                        >
                                             <h4>Release date</h4>
                                             <h3>{released}</h3>
                                        </div>

                                        <div
                                             className={
                                                  rating ? styles.details_all_text : styles.none
                                             }
                                        >
                                             <h4>Rating</h4>
                                             <h3>{rating}</h3>
                                        </div>
                                   </div>
                              </div>

                              <div className={styles.details_description}>
                                   <h2>About</h2>
                                   <h3 className={styles.details_description_text}>
                                        {description}
                                   </h3>
                              </div>
                         </div>
                    </div>
               ) : (
                    <Spinner />
               )}
          </div>
     );
};

export default GameDetail;
