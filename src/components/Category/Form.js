import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import styles from './Form.module.css';

function Form({ setCategories }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    const { target } = e;
    setInputValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        id="input_search"
        placeholder="Search category"
        value={inputValue}
        onChange={handleChange}
      />
      <Button
        className={styles.button}
        buttonText="Buscar"
        handleSubmit={handleSubmit}
      />
    </form>
  );
}
Form.propTypes = {
  setCategories: PropTypes.func.isRequired
};
export default Form;
