import { ChangeEvent, useState } from 'react';
import './Select.css';
export type SelectProps = {
  options: string[];
  updateOptions: (e: ChangeEvent<HTMLSelectElement>) => void;
  keyword: string;
};

export const Select = ({ options, updateOptions, keyword }: SelectProps) => {
  const [selection, setSelection] = useState('');

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
        <option value={''} disabled hidden>
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
