import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postGame } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import styles from './NewGame.module.css';

const NewGame = () => {
     const dispatch = useDispatch();

     const [input, setInput] = useState({
          name: '',
          img: '',
          platforms: [],
          genres: [],
          released: '',
          rating: '',
          description: '',
     });

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
                         <h3>Game Name</h3>
                         <input></input>
                    </form>
                    <button className={styles.container_form_button} type="submit">
                         <span>Create Game</span>
                    </button>
               </div>
          </div>
     );
};

export default NewGame;
