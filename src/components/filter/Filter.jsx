import { StyledFilterDiv } from './Filter.styled';
import propTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <StyledFilterDiv>
      <h3>Find contact by name</h3>
      <input
        onChange={onFilterChange}
        value={filter}
        placeholder="Enter filter value"
        name="filter"
      ></input>
    </StyledFilterDiv>
  );
};
Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onFilterChange: propTypes.func.isRequired,
};
export default Filter;
