import PropTypes from 'prop-types';
import { FilterBlock, Input, Text } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterBlock>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Name"
      />
    </FilterBlock>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
