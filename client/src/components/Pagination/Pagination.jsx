import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';
import styles from './Pagination.module.css';

const Pagination = ({ gamesPerPage, allGames, pagination, currentPage }) => {
     const dispatch = useDispatch();

     function handlePagination(number) {
          dispatch(setCurrentPage(number));
     }

     const statePage = useSelector((state) => state.currentPage);

     pagination(statePage);

     const pageNumbers = [];

     for (let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++) {
          pageNumbers.push(i);
     }

     return (
          <nav>
               <ul className={styles.crumbs}>
                    {pageNumbers &&
                         pageNumbers.map((number) => (
                              <li className={styles.number} key={number}>
                                   <div
                                        className={
                                             currentPage === number
                                                  ? styles.crumb__active
                                                  : styles.crumb
                                        }
                                        onClick={() => handlePagination(number)}
                                   >
                                        {number}
                                   </div>
                              </li>
                         ))}
               </ul>
          </nav>
     );
};

export default Pagination;
