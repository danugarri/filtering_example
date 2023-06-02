export type SelectProps = {
  options: string[];
};
export const Select = ({ options }: SelectProps) => {
  return (
    <select name="select">
      {options &&
        options.map((option) => (
          <option
            key={option}
            value={
              option === 'version' || option === 'country' ? undefined : option
            }
            selected={option === 'version' || option === 'country'}
          >
            {option}
          </option>
        ))}
    </select>
  );
};
