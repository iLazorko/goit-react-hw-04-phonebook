import { InputFilter, LabelFilter, FilterWrap } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ onChange }) {
  return (
    <FilterWrap>
      <LabelFilter htmlFor="filter">
        Find contacts by name
        <InputFilter type="text" name="filter" onChange={onChange} />
      </LabelFilter>
    </FilterWrap>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
