import { ChangeEvent, useEffect, useState } from 'react';
import './Select.css';
export type SelectProps = {
  options: string[];
  updateOptions: (e: ChangeEvent<HTMLSelectElement>) => void;
  keyword: string;
  selectedFilters: string[];
};

export const Select = ({
  options,
  updateOptions,
  keyword,
  selectedFilters,
}: SelectProps) => {
  const [selection, setSelection] = useState('');

  useEffect(() => {
    // reset select value
    selectedFilters.length === 0 && setSelection('');
  }, [selectedFilters.length, keyword]);

  return (
    <>
      <select
        value={selection}
        name="select"
        onChange={(e) => {
          updateOptions(e);
          setSelection(e.target.value);
        }}
      >
        <option value={''} disabled hidden={false}>
          {keyword}
        </option>
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </>
  );
};
