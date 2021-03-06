import React, { Fragment, useContext, KeyboardEvent } from "react";
import { SearchValueContext } from "../context/SearchValueProvider";
import styled from "styled-components";

const StyledSearchInput = styled.input`
    border: none;
    background-color: inherit;
    color: rgb(137, 160, 181);
    font-weight: bold;
    padding: 0.5vh 1vw;
    flex: 1;

    &:focus {
        outline: none;
        color: black;
    }

    &::placeholder {
        color: rgb(137, 160, 181);
        font-weight: bold;
    }
`;

interface Props {
    customKeyDownEven: () => void;
}

const SearchInput = (props: Props) => {
    const [searchValue, setSearchValue] = useContext(SearchValueContext);

    const redirectOnKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            props.customKeyDownEven();
        }

        return;
    };

    return (
        <Fragment>
            <StyledSearchInput
                type="text"
                placeholder="Search for summoner"
                name="name"
                onChange={(e) => setSearchValue(e.target.value)}
                autoComplete="off"
                onKeyDown={(event) => redirectOnKeydown(event)}
            ></StyledSearchInput>
        </Fragment>
    );
};

export default SearchInput;
