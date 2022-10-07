const SearchParams = () => {
  const location = 'Richards Bay';
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
