import { shallow } from 'enzyme';
import Card from '../../../../components/UI/Card';

describe('Testing UI/Card component', () => {
  const img = 'https://www.w3schools.com/w3css/img_lights.jpg';
  const title = 'goku';
  const user = {
    display_name: 'No username',
    avatar_url:
      'https://gravatar.com/avatar/311ef4fa1fabdbc9b36d45f2ef906545?s=400&d=mp&r=x'
  };
  const wrapper = shallow(<Card img={img} title={title} user={user} />);

  test('Should render Card Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a p with title goku', () => {
    const paragraph = wrapper.find('p');
    expect(paragraph.text().trim()).toBe(title);
  });

  test('img should have an alt text', () => {
    const image = wrapper.find('img');
    expect(image.prop('alt')).toBe(title);
  });

  test('img should have a url', () => {
    const image = wrapper.find('img');
    expect(image.prop('src')).toBe(img);
  });
});
