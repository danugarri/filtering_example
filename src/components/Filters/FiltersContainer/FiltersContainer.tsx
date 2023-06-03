import { ChangeEvent, useContext, useState, useEffect, useRef } from 'react';
import { Select } from '../Select/Select';
import { DataContext } from '../../DataProvider/DataProvider';
import { getPossibleOptions } from '../../../helpers/helpers';
import './FiltersContainer.css';
import { DocumentFileType } from '../../DocumentList/DocumentList.types';
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

  const prevSelectedFilters = useRef(selectedFilters);
  useEffect(() => {
    const filtered: DocumentFileType[] = [];

    const filterData = () => {
      if (prevSelectedFilters.current === selectedFilters) {
        // Selected filters haven't changed, no need to filter again
        return;
      }

      prevSelectedFilters.current = selectedFilters; // Update previous selected filters

      if (selectedFilters.length === 0) {
        // No filters selected, return original data
        setFilteredData(data);
        return;
      }

      selectedFilters.forEach((selection) => {
        const filteredData = data.filter((element) => {
          for (const prop in element) {
            if (element[prop] === selection) {
              return true;
            }
          }
          return false;
        });
        filtered.push(...filteredData);
      });

      const uniqueFiltered = Array.from(new Set(filtered));
      setFilteredData(uniqueFiltered);
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
