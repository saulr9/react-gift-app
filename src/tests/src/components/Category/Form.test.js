import { shallow } from 'enzyme';
// eslint-disable-next-line import/no-unresolved
import Form from 'components/Category/Form';

describe('Testing Category form component', () => {
  const setCategories = () => {};
  const wrapper = shallow(<Form setCategories={setCategories} />);
  test('Should render Form', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should change input value', () => {
    // eslint-disable-next-line prefer-const
    let input = wrapper.find('#input_search');
    const value = 'vegeta';
    input.simulate('change', { target: { value } });
    input = wrapper.find('#input_search').props().value;

    expect(input).toBe(value);
  });
});
