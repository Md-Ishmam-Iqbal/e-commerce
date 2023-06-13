/* eslint-disable react/prop-types */
const SearchFilter = ({ categories }) => {
  console.log(categories);
  return (
    <header className="search-filter">
      <select className="filter">
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="1">3</option>
      </select>
      <input type="text" placeholder="search" className="product-search" />
    </header>
  );
};

export default SearchFilter;
