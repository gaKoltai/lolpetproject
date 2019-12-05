import React, { useRef, CSSProperties, useState, useEffect } from "react";
import CSS from "csstype";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  searchData: (summonerName: string | undefined) => void;
}

const MainSearch: React.FC<Props> = ({ searchData }) => {
  const searchValue = useRef<HTMLInputElement | null>(null);
  const [searchBarStyle, setSearchBarStyle] = useState<CSSProperties>();

  const sendSearch = (): void => {
    const summonerName = handleSearch();
    searchData(summonerName);
  };

  useEffect(() => {
    setSearchBarStyle({ paddingTop: "10%" });
  }, []);

  const handleSearch = (): string | undefined => {
    if (
      searchValue &&
      searchValue.current &&
      searchValue.current.value !== ""
    ) {
      return searchValue.current.value;
    }

    return;
  };

  const newStyle = {
    paddingTop: "5%",
    paddingBottom: "5%"
  };

  return (
    <div className="field has-addons" style={searchBarStyle}>
      <div className="control is-expanded">
        <input
          type="text"
          placeholder="Summoner name..."
          ref={searchValue}
          name="name"
          className="input is-rounded is-fullwidth is-medium"
        ></input>
      </div>
      <div className="control">
        <button
          className="button is-outlined is-danger is-medium"
          onClick={() => {
            sendSearch();
            if (searchValue.current && searchValue.current.value)
              searchValue.current.value = "";
            setSearchBarStyle(newStyle);
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default MainSearch;
