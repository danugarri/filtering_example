export type SelectProps = {
  options: string[];
};
export const Select = ({ options }: SelectProps) => {
  return (
    <select name="select">
      {options &&
        options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
};
