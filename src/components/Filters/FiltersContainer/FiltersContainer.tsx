import { ChangeEvent, useContext, useState } from 'react';
import { Select } from '../Select/Select';
import { DataContext } from '../../DataProvider/DataProvider';
import { getPossibleOptions } from '../../../helpers/helpers';
import './FiltersContainer.css';

export const FiltersContainer = () => {
  const data = useContext(DataContext);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const updateOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilters((prev) =>
      // only unique elements
      Array.from(new Set(prev.concat(e.target.value)))
    );
  };

  return (
    <div className="filters-container">
      <span className="filters-head">FILTERS</span>
      <section className="first-row">
        {data ? (
          <section className="selects-section">
            <Select
              options={getPossibleOptions(data, 'country')}
              updateOptions={updateOptions}
              keyword="country"
              selectedFilters={selectedFilters}
            />
            <Select
              options={getPossibleOptions(data, 'version')}
              updateOptions={updateOptions}
              keyword="version"
              selectedFilters={selectedFilters}
            />
          </section>
        ) : (
          <></>
        )}
        <button
          className="clear-all-filters"
          onClick={() => {
            setSelectedFilters([]);
          }}
        >
          Clear all filters
        </button>
      </section>
      <ul className="filtered-options-container">
        {selectedFilters.map((option) => (
          <li className="filtered-option" key={option}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
