import React, { useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import SearchWrapper from "../search/SearchWrapper";
import styled from "styled-components";
import NavTitle from "./NavTitle";
import { SummonerDataContext } from "../context/SummonerDataProvider";

const StyledNavBar = styled.div`
    width: 100vw;
    height: 6vh;
    display: flex;
    /*position: fixed;*/
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
    z-index: 1;
    background-color: rgb(19, 28, 46);
    color: white;

    h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
    }
`;

interface Props {}

const NavBar = (props: Props) => {
    const [summoner, setSummoner] = useContext(SummonerDataContext);

    return (
        <StyledNavBar>
            <NavTitle />
            {summoner && <SearchWrapper />}
            <PrimaryButton>Sing in</PrimaryButton>
        </StyledNavBar>
    );
};

export default NavBar;
