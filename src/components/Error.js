import Navbar from './Navbar';
import styles from '../styles/style.module.css';

const Error = () => (
  <>
    <Navbar />
    <h1 className={styles.error}>Oops! Page not found!</h1>
  </>
);

export default Error;
