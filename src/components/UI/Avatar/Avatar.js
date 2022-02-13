import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

function Avatar({ img }) {
  return (
    <div
      className={styles.avatar}
      style={{
        backgroundImage: `url(${img})`
      }}
    />
  );
}
Avatar.propTypes = {
  img: PropTypes.string.isRequired
};

export default Avatar;
