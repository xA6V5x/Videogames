import NavBar from '../NavBar/NavBar';
import styles from './GameAdd.module.css';

const GameAdd = () => {
     return (
          <div className={styles.container}>
               <NavBar />;
               <div className={styles.container}>
                    <div className={styles.gamesArea}></div>
               </div>
          </div>
     );
};

export default GameAdd;
