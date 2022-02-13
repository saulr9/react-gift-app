import { useState } from 'react';
import Form from './Form';
import Grid from './Grid';
import styles from './List.module.css';

function List() {
  const [categories, setCategories] = useState([
    'Dragon Ball',
    'Naruto',
    'One Punch Man'
  ]);

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

export default List;
