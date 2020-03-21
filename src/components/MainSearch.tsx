import React, { CSSProperties, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MainSearch: React.FC = props => {
    const [searchValue, setSearchValue] = useState<null | string>(null);

    return (
        <div className="custom-hero">
            <div className="main-search">
                <input
                    type="text"
                    placeholder="Summoner name..."
                    name="name"
                    onChange={e => setSearchValue(e.target.value)}
                    className="main-search-input"
                ></input>
            </div>
            <div>
                <Link to={`/summoner/${searchValue}`}>
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MainSearch;
