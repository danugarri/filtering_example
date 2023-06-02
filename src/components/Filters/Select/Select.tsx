import './Select.css';

export type SelectProps = {
  options: string[];
};
export const Select = ({ options }: SelectProps) => {
  const getOptionStyle = (option: string) => {
    const isPattern =
      option === 'version' || option === 'country' ? 'pattern-style' : '';
    return isPattern;
  };
  return (
    <select name="select" defaultValue={'version' || 'country'}>
      {options &&
        options.map((option) => (
          <option
            key={option}
            value={
              option === 'version' || option === 'country' ? undefined : option
            }
            className={getOptionStyle(option)}
          >
            {option}
          </option>
        ))}
    </select>
  );
};
