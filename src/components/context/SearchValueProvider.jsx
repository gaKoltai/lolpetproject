import React, { createContext, useState } from "react";

export const SearchValueContext = createContext();

export const SearchValueProvider = (props) => {
    const [searchValue, setsearchValue] = useState("");

    return (
        <SearchValueContext.Provider value={[searchValue, setsearchValue]}>
            {props.children}
        </SearchValueContext.Provider>
    );
};
