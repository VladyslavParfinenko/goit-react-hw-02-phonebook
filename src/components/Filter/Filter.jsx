import css from './Filter.module.css'
import PropTypes from 'prop-types';


const Filter = ({filter,onChange}) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        
        value={filter}
        onChange={onChange}
        name="filter"
      ></input>
    </label>
  );
};

Filter.propTypes ={
  filter:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}

export default Filter;
