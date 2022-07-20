import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGenres, postGame } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import iconCreateGame from '../../assets/IconsNav/iconCreateGame.png';
import styles from './NewGame.module.css';

const NewGame = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const genres = useSelector((state) => state.genres);

     useEffect(() => {
          dispatch(getGenres());
     }, [dispatch]);

     const platforms = [
          'Linux',
          'macOs',
          'Nintendo Switch',
          'PC',
          'PlayStation 2',
          'PlayStation 3',
          'PlayStation 4',
          'PlayStation 5',
          'Xbox',
          'Xbox One',
          'Xbox 360',
          'Xbox Series S/X',
     ];

     const [input, setInput] = useState({
          name: '',
          img: '',
          platforms: [],
          genres: [],
          released: '',
          rating: '',
          description: '',
     });

     // para todos los inputs
     function handleChange(e) {
          setInput({
               ...input,
               [e.target.name]: e.target.value,
          });
     }
     //borrar manualmente las plataformas o generos no requeridos
     function handleDeletePlatform(e) {
          setInput({
               ...input,
               platforms: input.platforms.filter((data) => data !== e),
          });
     }

     function handleDeleteGenre(e) {
          setInput({
               ...input,
               genres: input.genres.filter((data) => data !== e),
          });
     }

     // para los select(platforms y genres)
     function handeSelect(e) {
          let rev = input[e.target.name].filter((data) => data === e.target.value);

          rev.length > 0
               ? alert(
                      `The "${e.target.value}" ${
                           e.target.value == 'genres' ? 'genre' : 'platform'
                      } has already been added`
                 )
               : setInput({
                      ...input,
                      [e.target.name]: [...input[e.target.name], e.target.value],
                 });
     }

     function handleSubmit(e) {
          e.preventDefault();
          alert('Game Created Successfully');
          dispatch(postGame(input));
          setInput({
               name: '',
               img: '',
               platforms: [],
               genres: [],
               released: '',
               rating: '',
               description: '',
          });
          navigate('/Home');
     }
     console.log(input);

     return (
          <div className={styles.container}>
               <NavBar />
               <div className={styles.container_form_all}>
                    <div className={styles.container_form}>
                         <h1>Create a Game</h1>
                         <form onSubmit={(e) => handleSubmit(e)}>
                              {/* -------------NAME----------- */}
                              <div className={styles.form_section}>
                                   <label>Name:</label>
                                   <br />
                                   <input
                                        type="text"
                                        name="name"
                                        maxLength="24"
                                        placeholder="Game Name. . ."
                                        onChange={(e) => handleChange(e)}
                                   />
                              </div>
                              {/* ------------IMAGEN---------- */}
                              <div className={styles.form_container_section_img}>
                                   <label>Image:</label>
                                   <br />
                                   <input
                                        type="text"
                                        maxLength="257"
                                        name="img"
                                        placeholder="URL Image. . ."
                                        onChange={(e) => handleChange(e)}
                                   />
                                   <div className={styles.form_section_img}>
                                        <img
                                             src={
                                                  input.img
                                                       ? input.img
                                                       : 'https://i.ebayimg.com/images/g/RPcAAOSwENxXme1D/s-l400.jpg'
                                             }
                                             alt="Game Img"
                                        />
                                   </div>
                              </div>
                              {/* ------------PLATFORMS---------- */}
                              <div className={styles.form_section}>
                                   <div className={styles.platforms_section}>
                                        <label>Platforms:</label>
                                        <br />
                                        <select name="platforms" onChange={(e) => handeSelect(e)}>
                                             {platforms.map((platform) => {
                                                  return (
                                                       <option
                                                            name={platform}
                                                            value={platform}
                                                            key={platform}
                                                       >
                                                            {platform}
                                                       </option>
                                                  );
                                             })}
                                        </select>
                                   </div>
                              </div>
                              <div className={styles.section_delete_container}>
                                   {input.platforms.map((platform) => (
                                        <div key={platform} className={styles.section_delete}>
                                             <button onClick={() => handleDeletePlatform(platform)}>
                                                  X
                                             </button>
                                             <p>{platform}</p>
                                        </div>
                                   ))}
                              </div>
                              {/* ---------GENRES------------ */}
                              <div className={styles.form_section}>
                                   <div className={styles.platforms_section}>
                                        <label>Genres:</label>
                                        <br />
                                        <select name="genres" onChange={(e) => handeSelect(e)}>
                                             {genres.map((genre) => {
                                                  return (
                                                       <option
                                                            name={genre.name}
                                                            value={genre.name}
                                                            key={genre.id}
                                                       >
                                                            {genre.name}
                                                       </option>
                                                  );
                                             })}
                                        </select>
                                   </div>
                              </div>
                              <div className={styles.section_delete_container}>
                                   {input.genres.map((genre) => (
                                        <div key={genre} className={styles.section_delete}>
                                             <button onClick={() => handleDeleteGenre(genre)}>
                                                  X
                                             </button>
                                             <p>{genre}</p>
                                        </div>
                                   ))}
                              </div>
                              {/* -----------RELEASED----------- */}
                              <div className={styles.form_section}>
                                   <label>Released:</label>
                                   <br />
                                   <input
                                        type="date"
                                        name="released"
                                        onChange={(e) => handleChange(e)}
                                   />
                              </div>
                              {/* -----------RANTING-------------- */}
                              <div className={styles.form_section}>
                                   <label>Rating:</label>
                                   <br />
                                   <select name="rating" onChange={(e) => handleChange(e)}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                   </select>
                              </div>
                              {/* -----------DESCRIPTION------------ */}
                              <div className={styles.form_section}>
                                   <label>Description:</label>
                                   <br />
                                   <textarea
                                        className={styles.form_section_description}
                                        type="Textarea"
                                        maxLength="250"
                                        name="description"
                                        cols="60"
                                        rows="4"
                                        placeholder="Description. . ."
                                        onChange={(e) => handleChange(e)}
                                   />
                              </div>
                              {/* -----------BUTTON SUBMIT------------ */}
                              <button
                                   className={styles.games_alert_text}
                                   type="submit"
                                   onClick={(e) => handleSubmit(e)}
                              >
                                   <div className={styles.icon}>
                                        <img src={iconCreateGame} alt="icon" />
                                   </div>
                                   <div className={styles.title}>
                                        <span>Create Game</span>
                                   </div>
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default NewGame;
