import { ChangeEvent, useContext, useState, useEffect } from 'react';
import { Select } from '../Select/Select';
import { DataContext } from '../../DataProvider/DataProvider';
import { getPossibleOptions } from '../../../helpers/helpers';
import './FiltersContainer.css';
import { FiltersContainerProps } from './filtersContainer.types';

export const FiltersContainer = ({
  setFilteredData,
}: FiltersContainerProps) => {
  const { data } = useContext(DataContext);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const updateOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilters((prev) =>
      // only unique elements
      Array.from(new Set(prev.concat(e.target.value)))
    );
  };

  useEffect(() => {
    const filterData = () => {
      let filteredData = data;

      selectedFilters.forEach((selection) => {
        filteredData = filteredData.filter((element) => {
          for (const prop in element) {
            if (element[prop] === selection) {
              return true;
            }
          }
          return false;
        });
      });

      setFilteredData(filteredData);
    };

    filterData();
  }, [selectedFilters, data, setFilteredData]);

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
