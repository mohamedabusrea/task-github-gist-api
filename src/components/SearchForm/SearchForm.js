import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput.view";
import SearchResultItem from "../SearchResultItem/SearchResultItem.view";

const gistURL = (username) => `https://api.github.com/users/${username}/gists`;

const EMPTY_MESSAGE = "You didn't make any search yet.";

const SearchForm = () => {
  const [searchResult, setSearchResult] = useState([]);

  const [searchMessage, setSearchMessage] = useState(EMPTY_MESSAGE);

  const [isLoading, setIsLoading] = useState(false);

  const submitSearchEvent = async (value) => {
    setIsLoading(true);
    setSearchMessage("Loading...");

    const response = await fetch(gistURL(value));

    if (response.ok) {
      const data = await response.json();

      setSearchResult(data);
    } else {
      setSearchResult([]);
      setSearchMessage("We couldn't find any gists for this user");
    }

    setIsLoading(false);
  };

  const shouldShowMessage = !searchResult.length || isLoading;

  return (
    <div className="SearchForm">
      <SearchInput
        isLoading={isLoading}
        submitSearchEvent={submitSearchEvent}
      />
      <ul className="SearchResult">
        {shouldShowMessage ? (
          <p>{searchMessage}</p>
        ) : (
          searchResult.map((item, index) => (
            <SearchResultItem key={index} item={item} />
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchForm;
