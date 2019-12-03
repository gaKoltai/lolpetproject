import React, { useRef } from "react";

export default function MainSearch({ searchData }) {
  const searchValue = useRef(null);

  const sendSearch = () => {
    searchData(handleSearch);
  };

  const handleSearch = () => {
    const searchPhrase = searchValue.current.value;

    if (searchPhrase === "") return;

    return searchPhrase;
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
}
