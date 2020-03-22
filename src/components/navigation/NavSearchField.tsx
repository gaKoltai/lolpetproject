import React, { CSSProperties, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SearchInput from "../search/SearchInput";
import { SearchValueContext } from "../context/SearchValueProvider";
import SearchButton from "../search/SearchButton";
import RegionSelector from "../search/RegionSelector";
import { RegionContext } from "../context/RegionProvider";

const SearchField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    border-color: rgb(137, 160, 181);
    border-width: 0.04vw;
    background: rgb(39, 53, 82);
    border-style: solid;
    transition: height 0.2s ease-in-out;

    &:focus-within {
        background-color: white;
        height: 6vh;

        & > button {
            color: rgb(244, 67, 72);
        }
    }
`;

const NavSearchField: React.FC = props => {
    const [searchValue, setSearchValue] = useContext(SearchValueContext);
    const [region, setRegion] = useContext(RegionContext);

    const redirectToSearch = (): void => {
        if (searchValue === "" || searchValue === undefined) return;

        window.location.href = `http://localhost:3000/summoner/${region}/${searchValue}`;

        setSearchValue("");
    };

    return (
        <SearchField>
            <SearchInput />
            <RegionSelector />
            <SearchButton customClickEvent={redirectToSearch} />
        </SearchField>
    );
};

export default NavSearchField;
