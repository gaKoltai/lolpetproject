import React, { createContext, useState } from "react";

export const SummonerDataContext = createContext();

const SummonerDataProvider = (props) => {
    const [summonerData, setsummonerData] = useState();

    return (
        <SummonerDataContext.Provider value={[summonerData, setsummonerData]}>
            {props.children}
        </SummonerDataContext.Provider>
    );
};

export default SummonerDataProvider;
