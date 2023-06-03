import { ChangeEvent, useContext, useState } from 'react';
import { Select } from '../Select/Select';
import { DataContext } from '../../DataProvider/DataProvider';
import { getPossibleOptions } from '../../../helpers/helpers';
import './FiltersContainer.css';

export const FiltersContainer = () => {
  const data = useContext(DataContext);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const updateOptions = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedOptions((prev) => prev.concat(e.target.value));

  return (
    <div className="filters-container">
      <span className="filters-head">FILTERS</span>
      <section className="first-row">
        {data ? (
          <section className="selects-section">
            <Select
              options={getPossibleOptions(data, 'country')}
              updateOptions={updateOptions}
            />
            <Select
              options={getPossibleOptions(data, 'version')}
              updateOptions={updateOptions}
            />
          </section>
        ) : (
          <></>
        )}
        <button className="clear-all-filters" onClick={() => {}}>
          Clear all filters
        </button>
      </section>
      <ul className="filtered-options-container">
        {selectedOptions.map((option) => (
          <li className="filtered-option" key={option}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
