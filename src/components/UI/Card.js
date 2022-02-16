import React, { useState } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import Avatar from './Avatar/Avatar';
import styles from './Card.module.css';

function Card({ img, title, user }) {
  const { display_name: userDisplayName, avatar_url: userAvatar } = user;
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${!loaded && styles.card__loading} ${
        hovered && styles.card__hovered
      }`}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <div className={styles.card__images}>
        <img src={img} alt={title} onLoad={() => setLoaded(true)} />;
      </div>
      <div className={styles.card__details}>
        <Avatar img={userAvatar} username={userDisplayName} />
        <p>{title}</p>
      </div>
    </div>
  );
}
Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  user: PropTypes.objectOf(PropTypes.any)
};
Card.defaultProps = {
  title: '',
  user: {
    display_name: 'No username',
    avatar_url:
      'https://gravatar.com/avatar/311ef4fa1fabdbc9b36d45f2ef906545?s=400&d=mp&r=x'
  }
};
export default Card;
