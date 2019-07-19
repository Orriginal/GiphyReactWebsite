import React, { useState, useEffect } from "react";
import GifGrid from "./gifgrid";

export default function Search({ match }) {
  const [searchValue, setSearchValue] = useState(match.params.value);

  useEffect(() => {
    setSearchValue(match.params.value);
  }, [match.params.value]);

  return (
    <main>
      <GifGrid q={searchValue} />
    </main>
  );
}
