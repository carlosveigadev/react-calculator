import PropTypes from 'prop-types';

const Button = ({ name }) => {
  <button type="button">{name}</button>;
};

Button.propTypes = { result: PropTypes.string };
