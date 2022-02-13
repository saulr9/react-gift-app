/* import { useState, useEffect } from 'react'; */
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import useFetch from '../../hooks/useFetch';

function Grid({ category }) {
  const { loading, data: gifs } = useFetch(category);
  return (
    <>
      {loading && 'Loading...'}
      {gifs.map((gif) => (
        <GridItem key={gif.slug} gif={gif} />
      ))}
    </>
  );
}
Grid.propTypes = {
  category: PropTypes.string.isRequired
};
export default Grid;
