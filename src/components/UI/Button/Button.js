import PropTypes from 'prop-types';

function Button({ handleSubmit, buttonText }) {
  return (
    <button type="submit" onClick={handleSubmit}>
      {buttonText}
    </button>
  );
}
Button.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};
Button.defaultProps = {
  buttonText: 'Search'
};

export default Button;
