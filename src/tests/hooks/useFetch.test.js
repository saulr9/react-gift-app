/* eslint-disable import/no-unresolved */
import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('Testing useFetch hook', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('goku'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return a gifs array and loading false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('goku'));
    await waitForNextUpdate({ timeout: 5000 });

    const { data, loading } = result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
