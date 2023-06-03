import { ChangeEvent, useContext, useState, useEffect } from 'react';
import { Select } from '../Select/Select';
import { DataContext } from '../../DataProvider/DataProvider';
import { getPossibleOptions } from '../../../helpers/helpers';
import './FiltersContainer.css';
import { FiltersContainerProps } from './filtersContainer.types';
import { SearchingFilter } from '../SearchingFilter/SearchingFilter';

export const FiltersContainer = ({
  setFilteredData,
}: FiltersContainerProps) => {
  const { data } = useContext(DataContext);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchingValue, setSearchingValue] = useState<string>('');

  const updateOptions = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setSelectedFilters((prev) =>
      // only unique elements
      Array.from(new Set(prev.concat(e.target.value)))
    );
  };

  useEffect(() => {
    const filterData = () => {
      let filteredData = data;

      if (searchingValue !== '') {
        filteredData = filteredData.filter((element) =>
          element['text'].toLowerCase().includes(searchingValue.toLowerCase())
        );
      }

      if (selectedFilters.length > 0) {
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
      }

      setFilteredData(filteredData);
    };

    filterData();
  }, [selectedFilters, data, setFilteredData, searchingValue]);

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
            setSearchingValue('');
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
      <SearchingFilter
        searchingValue={searchingValue}
        setSearchingValue={setSearchingValue}
      />
    </div>
  );
};
