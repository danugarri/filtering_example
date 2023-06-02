import React, { useContext } from 'react';
import { Select } from '../Select/Select';
import { DataContext } from '../../DataProvider/DataProvider';
import { getPossibleOptions } from '../../../helpers/helpers';

export const FiltersContainer = () => {
  const data = useContext(DataContext);

  return (
    <div>
      {data ? (
        <>
          <Select options={getPossibleOptions(data, 'country')} />
          <Select options={getPossibleOptions(data, 'version')} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
