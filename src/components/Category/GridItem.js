import PropTypes from 'prop-types';
import Card from '../UI/Card';

function GridItem({ gif }) {
  console.log(gif);
  return (
    <Card img={gif.images.fixed_height.url} title={gif.title} user={gif.user} />
  );
}
GridItem.propTypes = {
  gif: PropTypes.objectOf(PropTypes.any).isRequired
};
export default GridItem;
