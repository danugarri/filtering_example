import { ChangeEvent } from 'react';
import './Select.css';
export type SelectProps = {
  options: string[];
  updateOptions: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ options, updateOptions }: SelectProps) => {
  return (
    <>
      <select
        name="select"
        defaultValue={'version' || 'country'}
        onChange={(e) => {
          updateOptions(e);
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
    </>
  );
};
