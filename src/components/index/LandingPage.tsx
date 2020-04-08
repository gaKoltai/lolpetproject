import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SearchWrapper from "../search/SearchWrapper";
import { Title } from "../Title";
import { SummonerDataContext } from "../context/SummonerDataProvider";
import Hero from "./Hero";

const LandingPage = () => {
    const [summoner, setSummoner] = useContext(SummonerDataContext);

    useEffect(() => {
        setSummoner("");
    }, []);

    return (
        <Hero main>
            <Title />
            <SearchWrapper large />
        </Hero>
    );
};

export default LandingPage;
