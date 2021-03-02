import PropTypes from 'prop-types';
import styles from '../styles/style.module.css';

const Display = ({ result }) => (
  <div className={styles.display}>
    <h1>{result}</h1>
  </div>
);

Display.propTypes = { result: PropTypes.string };

Display.defaultProps = {
  result: '0',
};

export default Display;
