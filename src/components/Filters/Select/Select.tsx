import { useState } from 'react';
import './Select.css';
export type SelectProps = {
  options: string[];
};

export const Select = ({ options }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  console.log(selectedOption);
  return (
    <>
      <select
        name="select"
        defaultValue={'version' || 'country'}
        onChange={(e) => {
          setSelectedOption((prev) => prev.concat(e.target.value));
        }}
      >
        {options &&
          options.map((option) => (
            <option
              key={option}
              value={
                option === 'version' || option === 'country'
                  ? undefined
                  : option
              }
            >
              {option}
            </option>
          ))}
      </select>
      <span>{selectedOption}</span>
    </>
  );
};
