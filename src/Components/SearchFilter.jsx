/* eslint-disable react/prop-types */
const SearchFilter = ({ categories }) => {
  return (
    <header className="search-filter">
      <select className="filter">
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <input type="text" placeholder="search" className="product-search" />
    </header>
  );
};

export default SearchFilter;
