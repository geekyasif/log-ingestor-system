import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      if (query) {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/search?query=${query}`
        );
        const data = await response.json();
        console.log(data);
        setSearchResults(data);
      } else {
        setSearchResults({});
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearInterval(timer);
  }, [query]);

  return (
    <div className="container mx-auto">
      <div>
        <input
          type="text"
          placeholder="type query..."
          className="border p-3 w-full rounded my-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {loading && (
          <div className="w-full flex justify-center items-center my-2">
            <p className="">Loading...</p>
          </div>
        )}
        {Object.keys(searchResults)?.length === 0 ? (
          <div className="w-full flex justify-center items-center my-2">
            <p className="">No Data Found!</p>
          </div>
        ) : (
          <div className="">
            <p>Total Search Results: {searchResults?.totalCount}</p>
            {searchResults?.totalCount === 0 && (
              <div className="w-full flex justify-center items-center my-2">
                <p>No Search Found!</p>
              </div>
            )}
            {searchResults?.data?.map((data) => (
              <div className="border rounded p-2 my-2" key={data?._id}>
                <pre>{JSON.stringify(data, null, 4)}</pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
