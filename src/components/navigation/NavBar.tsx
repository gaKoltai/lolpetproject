import React, { useState, useContext } from "react";
import { SummonerContext } from "../context/SummonerProvider";
import PrimaryButton from "../PrimaryButton";
import NavSearchField from "./NavSearchField";
import styled from "styled-components";

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
    const [summoner, setSummoner] = useContext(SummonerContext);

    return (
        <StyledNavBar>
            <h1 onClick={() => (window.location.href = "http://localhost:3000")}>KMS</h1>
            {summoner && <NavSearchField />}
            <PrimaryButton />
        </StyledNavBar>
    );
};

export default NavBar;
