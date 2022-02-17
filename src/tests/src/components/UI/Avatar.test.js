import { shallow } from 'enzyme';
import Avatar from '../../../../components/UI/Avatar/Avatar';

describe('Testing UI/Avatar component', () => {
  const img = 'https://www.w3schools.com/w3css/img_lights.jpg';

  const wrapper = shallow(<Avatar img={img} />);

  test('Should render Avatar Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Div Should have background img', () => {
    const div = wrapper.find('div');
    expect(div.prop('style')).toHaveProperty('backgroundImage', `url(${img})`);
  });
});
