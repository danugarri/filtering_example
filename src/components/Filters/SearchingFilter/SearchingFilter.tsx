export type SearchingFilterType = {
  searchingValue: string;
  setSearchingValue: React.Dispatch<string>;
};
export const SearchingFilter = ({
  searchingValue,
  setSearchingValue,
}: SearchingFilterType) => {
  return (
    <input
      type="text"
      value={searchingValue}
      className="searching-filter"
      onChange={(e) => setSearchingValue(e.target.value)}
    />
  );
};
