import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Grid from './Grid';
import styles from './List.module.css';

function List({ defaultCategories }) {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <Form setCategories={setCategories} />
      <div className={styles.list}>
        {categories.map((category) => (
          <Grid key={category} category={category} />
        ))}
      </div>
    </>
  );
}
List.propTypes = {
  defaultCategories: PropTypes.arrayOf(PropTypes.string)
};
List.defaultProps = {
  defaultCategories: []
};
export default List;
