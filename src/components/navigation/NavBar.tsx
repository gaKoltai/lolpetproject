import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SummonerContext } from "../context/SummonerProvider";
import PrimaryButton from "../PrimaryButton";

interface Props {}

const NavBar = (props: Props) => {
    const [searchValue, setSearchValue] = useState<null | string>();
    const [summoner, setSummoner] = useContext(SummonerContext);

    return (
        <div className="main-nav">
            <h1>KMS</h1>
            {summoner && (
                <div>
                    <input
                        type="text"
                        placeholder="Summoner name..."
                        name="name"
                        onChange={e => setSearchValue(e.target.value)}
                    ></input>

                    <Link to={`/summoner/${searchValue}`}>
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Link>
                </div>
            )}
            <PrimaryButton />
        </div>
    );
};

export default NavBar;
