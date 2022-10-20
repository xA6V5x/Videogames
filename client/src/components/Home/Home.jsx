import React from 'react';
import NavBarHome from '../NavBarHome/NavBarHome.jsx';
import NavBarMobile from '../NavBarMobile/NavBarMobile.jsx';
import GamesContainer from '../GamesContainer/GamesContainer.jsx';
import styles from './Home.module.css';

const Home = () => {
     return (
          <div>
               <NavBarHome />
               <NavBarMobile />
               <GamesContainer />
          </div>
     );
};

export default Home;
