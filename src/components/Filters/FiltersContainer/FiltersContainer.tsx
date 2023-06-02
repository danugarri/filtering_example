import { useContext } from 'react';
import { Select } from '../Select/Select';
import { DataContext } from '../../DataProvider/DataProvider';
import { getPossibleOptions } from '../../../helpers/helpers';
import './FiltersContainer.css';

export const FiltersContainer = () => {
  const data = useContext(DataContext);

  return (
    <div className="filters-container">
      <span className="filters-head">FILTERS</span>
      {data ? (
        <section className="selects-section">
          <Select options={getPossibleOptions(data, 'country')} />
          <Select options={getPossibleOptions(data, 'version')} />
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};
