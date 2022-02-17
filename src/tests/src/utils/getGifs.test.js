// Disabled due to we are using absolute path, jsconfig.json will take care of it
// eslint-disable-next-line import/no-unresolved
import getGifs from 'utils/getGifs';

describe('Testing util getGifts', () => {
  test('should return an array', async () => {
    const gifs = await getGifs('goku');
    expect(gifs).toBeInstanceOf(Array);
  });
  test('should return array with size 10', async () => {
    const gifs = await getGifs('goku');
    expect(gifs.length).toBe(10);
  });
  test('should return an empty array', async () => {
    const gifs = await getGifs('');
    expect(gifs).toEqual([]);
  });
});
