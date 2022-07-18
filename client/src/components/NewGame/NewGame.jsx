import NavBar from '../NavBar/NavBar';
import styles from './NewGame.module.css';

const NewGame = () => {
     return (
          <div className={styles.container}>
               <NavBar />
               <div className={styles.container_form}>
                    <div className={styles.gamesArea}></div>
               </div>
          </div>
     );
};

export default NewGame;
