import React, { useState, useEffect } from "react";
import GiphyGridContainer from "./modules/giphy-grid-container";

export default function Search({ match }) {
  const [searchValue, setSearchValue] = useState(match.params.value);

  useEffect(() => {
    setSearchValue(match.params.value);
  }, [match.params.value]);

  return (
    <main>
      <GiphyGridContainer q={searchValue} />
    </main>
  );
}
