import './Select.css';
export type SelectProps = {
  options: string[];
};

export const Select = ({ options }: SelectProps) => {
  return (
    <select name="select" defaultValue={'version' || 'country'}>
      {options &&
        options.map((option) => (
          <option
            key={option}
            value={
              option === 'version' || option === 'country' ? undefined : option
            }
          >
            {option}
          </option>
        ))}
    </select>
  );
};
