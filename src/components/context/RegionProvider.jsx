import React, { createContext, useState } from "react";

export const RegionContext = createContext();

export const RegionProvider = props => {
    const [region, setRegion] = useState("EUW");

    return <RegionContext.Provider value={[region, setRegion]}>{props.children}</RegionContext.Provider>;
};
