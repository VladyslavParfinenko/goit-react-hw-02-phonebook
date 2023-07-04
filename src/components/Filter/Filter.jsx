import css from './Filter.module.css'


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

export default Filter;
