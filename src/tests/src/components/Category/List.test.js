/* eslint-disable import/no-unresolved */
import { shallow } from 'enzyme';
import List from 'components/Category/List';

describe('Testing category List component', () => {
  let wrapper = shallow(<List />);
  const defaultCategories = ['goku', 'vegeta'];
  test('should render List component - Match SnapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should there 2 grid items if there are 2 categories', () => {
    wrapper = shallow(<List defaultCategories={defaultCategories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Grid').length).toBe(defaultCategories.length);
  });
});
