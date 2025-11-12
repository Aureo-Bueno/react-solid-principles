import React, { useState } from "react";
import Styles from "./SearchBar.module.scss";
import IconInput from "../../../IconInput";
import Button from "../../../Button";
import { SearchIcon } from "../../../../common/icons";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSearch = (): void => {
    onSearch(query);
  };

  return (
    <div className={Styles.searchContainer}>
      <IconInput
        variant="secondary"
        value={query}
        onChange={handleInputChange}
        placeholder="O que você procura?"
      >
        <Button
          onClick={handleSearch}
          style={{ position: "relative", right: "36px" }}
        >
          <SearchIcon />
        </Button>
      </IconInput>
    </div>
  );
}

export default SearchBar;
