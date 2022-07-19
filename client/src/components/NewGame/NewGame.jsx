import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postGame } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import styles from './NewGame.module.css';

const NewGame = () => {
     const dispatch = useDispatch();

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

     // para los select(platforms y genres)
     function handeSelect(e) {
          setInput({
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
     }

     return (
          <div className={styles.container}>
               <NavBar />
               <div className={styles.container_form}>
                    <h1>Create a Game</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                         <div className={styles.form_section}>
                              <h3>Name</h3>
                              <input
                                   type="text"
                                   name="name"
                                   placeholder="Game Name..."
                                   onChange={(e) => handleChange(e)}
                              />
                         </div>
                         <div className={styles.form_section}>
                              <h3>Image</h3>
                              <input
                                   type="text"
                                   name="img"
                                   placeholder="URL Image..."
                                   onChange={(e) => handleChange(e)}
                              />
                              <div className={styles.form_section_img}>
                                   <img
                                        src={
                                             input.img
                                                  ? input.img
                                                  : 'https://i.ebayimg.com/images/g/RPcAAOSwENxXme1D/s-l400.jpg'
                                        }
                                        alt="Image Game"
                                   />
                              </div>
                         </div>
                         <div className={styles.form_section}>
                              <h3>Platforms:</h3>
                              <select onChange={(e) => handleChange(e)}>
                                   {platforms.map((platform) => (
                                        <option name={platform} value={platform} key={platform}>
                                             {platform}
                                        </option>
                                   ))}
                              </select>
                         </div>
                    </form>
                    <button className={styles.container_form_button} type="submit">
                         <span>Create Game</span>
                    </button>
               </div>
          </div>
     );
};

export default NewGame;
