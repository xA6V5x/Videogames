import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
     return (
          <div className={styles.intro}>
               <div className={styles.introText}>
                    <h1>FATALITY</h1>
                    <h2>Page not found</h2>
                    <div className={styles.buttonContainer}>
                         <h2>(╥﹏╥)</h2>
                         <Link to="/Home">
                              <button className={styles.introButton} type="button">
                                   <span>Go Home</span>
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default NotFound;
