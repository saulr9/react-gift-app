import { useState, useEffect } from 'react';
import getGifs from '../utils/getGifs';

function useFetch(category) {
  const [state, setState] = useState({
    loading: true,
    data: []
  });
  useEffect(() => {
    getGifs(category).then((gifs) => setState({ loading: false, data: gifs }));
  }, [category]);

  return state;
}

export default useFetch;
