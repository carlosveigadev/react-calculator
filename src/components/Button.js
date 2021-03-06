import PropTypes from 'prop-types';
import styles from '../styles/style.module.css';

const Button = ({ name, clickHandler }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  const checkButton = name => {
    if (name === '0') {
      return [styles.button, styles.button50].join(' ');
    } if (name === '÷' || name === 'x' || name === '-' || name === '+' || name === '=') {
      return [styles.button, styles.buttonOrange].join(' ');
    }
    return styles.button;
  };

  return (
    <button className={checkButton(name)} data-testid={name} type="button" onClick={handleClick}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
