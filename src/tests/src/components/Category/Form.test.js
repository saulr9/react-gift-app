import { shallow } from 'enzyme';
// eslint-disable-next-line import/no-unresolved
import Form from 'components/Category/Form';

describe('Testing Category form component', () => {
  const setCategories = jest.fn();
  let wrapper;
  let form;
  let value;
  let input;
  beforeEach(() => {
    wrapper = shallow(<Form setCategories={setCategories} />);
    value = 'vegeta';
    input = wrapper.find('#input_search');
    form = wrapper.find('form');
  });

  test('Should render Form', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should change input value', () => {
    input.simulate('change', { target: { value } });
    input = wrapper.find('#input_search').props().value;

    expect(input).toBe(value);
  });

  test('Should do nothing when input is empty', () => {
    form.simulate('submit', { preventDefault: () => {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Should call setCategories 1 time and clear inputValue - Simulate submit', () => {
    input.simulate('change', { target: { value } });
    form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    input = wrapper.find('#input_search');

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // alt toHaveBeenCalledWith(function(){})
    expect(input.props().value).toBe('');
  });
});
