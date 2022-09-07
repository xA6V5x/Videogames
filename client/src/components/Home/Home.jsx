import React from 'react';
import GamesContainer from '../GamesContainer/GamesContainer';
import NavBarHome from '../NavBarHome/NavBarHome';
import styles from './Home.module.css'

const Home = () => {
     return (
          <div>
               <NavBarHome />
               <GamesContainer />
          </div>
     );
};

export default Home;
