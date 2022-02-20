import { shallow } from 'enzyme';
// eslint-disable-next-line import/no-unresolved
import Grid from 'components/Category/Grid';

import useFetch from '../../../../hooks/useFetch';

jest.mock('../../../../hooks/useFetch');

describe('Testing Category Grid Component', () => {
  const category = 'vegeta';
  test('Should match snapshot - Initial render with no data and loading true', () => {
    useFetch.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<Grid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Should match snapshot - With gifs data and loading false', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Cualquier cosa'
      },
      {
        id: '123',
        url: 'https://localhost/cualquier/cosa.jpg',
        title: 'Otra cosa'
      }
    ];

    useFetch.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<Grid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GridItem').length).toBe(gifs.length);
  });
});
