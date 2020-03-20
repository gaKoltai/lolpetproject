import React, { CSSProperties, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MainSearch: React.FC = props => {
    const [searchValue, setSearchValue] = useState<null | string>(null);

    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input
                    type="text"
                    placeholder="Summoner name..."
                    name="name"
                    className="input is-rounded is-fullwidth is-medium"
                    onChange={e => setSearchValue(e.target.value)}
                ></input>
            </div>
            <div className="control">
                <Link to={`/summoner/${searchValue}`}>
                    <button className="button is-outlined is-danger is-medium">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MainSearch;
