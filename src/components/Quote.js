import Navbar from './Navbar';
import styles from '../styles/style.module.css';

const Quote = () => (
  <>
    <Navbar />
    <h1 className={styles.quote}>
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding. –William Paul Thurston
    </h1>
  </>
);

export default Quote;
