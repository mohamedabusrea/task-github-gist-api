import { useState } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";

const SearchInput = ({ submitSearchEvent, isLoading }) => {
  const [searchInput, setSearchInput] = useState("octocat");

  const updateSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const pressEnterEvent = (e, value) => {
    if (e.key === "Enter") {
      submitSearchEvent(value);
    }
  };

  return (
    <div className="SearchForm__input">
      <TextField
        id="filled-search"
        label="Username"
        variant="standard"
        value={searchInput}
        onChange={updateSearchInput}
        onKeyDown={(e) => pressEnterEvent(e, searchInput)}
        InputProps={{
          startAdornment: <InputAdornment position="start">@</InputAdornment>
        }}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        disabled={isLoading}
        onClick={() => submitSearchEvent(searchInput)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
