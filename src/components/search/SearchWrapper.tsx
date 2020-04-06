import React, { useContext } from "react";
import SearchInput from "./SearchInput";
import { SearchValueContext } from "../context/SearchValueProvider";
import SearchButton from "./SearchButton";
import RegionSelector from "./RegionSelector";
import { RegionContext } from "../context/RegionProvider";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

interface StyleProps {
    large?: boolean;
}

const SearchField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(props: StyleProps) => (props.large ? "40vw" : "auto")};
    height: ${(props: StyleProps) => (props.large ? "5vh" : "auto")};
    border-radius: 4px;
    border-color: rgb(137, 160, 181);
    border-width: 0.04vw;
    background: rgba(32, 43, 67, 0.3);
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

interface Props {
    large?: boolean;
}

const SearchWrapper = (props: Props) => {
    const [searchValue, setSearchValue] = useContext(SearchValueContext);
    const [region, setRegion] = useContext(RegionContext);

    const history = useHistory();

    const redirectToSearch = (): void => {
        if (searchValue === "" || searchValue === undefined) return;

        const link = `/summoner/${region}/${searchValue}`;

        history.push(link);

        setSearchValue("");
    };

    return (
        <SearchField large={props.large}>
            <SearchInput customKeyDownEven={redirectToSearch} />
            <RegionSelector />
            <SearchButton customClickEvent={redirectToSearch} />
        </SearchField>
    );
};

export default SearchWrapper;
