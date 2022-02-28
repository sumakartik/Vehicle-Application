export default function SearchBar({ handleSearchChange, handleSearchClick }) {
  return (
    <div>
      <form>
        <input
          id="search-bar"
          type="text"
          onChange={handleSearchChange}
        ></input>
        <button onClick={handleSearchClick}>SEARCH</button>
      </form>
    </div>
  );
}
