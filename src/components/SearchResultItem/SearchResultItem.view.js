import { useEffect, useState } from "react";
import FileTypesTags from "../FileTypesTags/FileTypesTags.view";
import Forks from "../Forks/Forks.view";

import "./SearchResultItem.styles.scss";

const SearchResultItem = ({ item = {} }) => {
  const [forksList, setForksList] = useState([]);

  useEffect(() => {
    const { forks_url } = item;

    if (forks_url) {
      getForksList(forks_url);
    }
  }, [item]);

  const getForksList = async (forks_url) => {
    const response = await fetch(forks_url);

    if (response.ok) {
      const data = await response.json();

      setForksList(data);
    }
  };

  return (
    <li className="SearchResultItem">
      <p>id: {item.id}</p>
      <p>
        html url:{" "}
        <a href={item.html_url} target="_blank" rel="noreferrer">
          {item.html_url}
        </a>
      </p>
      <FileTypesTags files={item.files} />
      {forksList.length ? <Forks forksList={forksList} /> : null}
    </li>
  );
};

export default SearchResultItem;
