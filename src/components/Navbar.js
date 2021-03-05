import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h2>Math Magicians</h2>
      <div className={styles.links}>
        <Link to="/">Home </Link>
        <Link to="/calculator">Calculator </Link>
        <Link to="/Quote">Quote </Link>
      </div>

    </div>
  );
}

export default Navbar;
