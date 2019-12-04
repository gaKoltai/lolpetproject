import React, { useRef } from "react";

interface Props {
  searchData: (summonerName: string | undefined) => void;
}

const MainSearch: React.FC<Props> = ({ searchData }) => {
  const searchValue = useRef<HTMLInputElement | null>(null);

  const sendSearch = (): void => {
    const summonerName = handleSearch();
    searchData(summonerName);
  };

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

  return (
    <section className="hero is-light-fullheight">
      <div className="hero-body has-text-centered">
        <div className="field has-addons">
          <div className="control">
            <input
              type="text"
              placeholder="Summoner name..."
              ref={searchValue}
              name="name"
              className="input is-rounded"
            ></input>
          </div>
          <div className="control">
            <button
              className="button is-outlined"
              onClick={() => {
                sendSearch();
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSearch;
