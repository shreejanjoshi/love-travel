import { createContext, useState } from "react";

// V contain react component
const VistiedContext = createContext({
    vistied: [],
    totalVisited: 0
});

//provding this context to all the compoenent that arae interested in listing the value and updating context value
function VistiedContextProvider(props){

    const [userVisted, setUserVisited] = useState([]);
    const context = {
        favorites: userVisted,
        totalVisited: userVisted.length,
    };

    //letest value
    return <VistiedContext.Provider value={context}>
        {props.children}
    </VistiedContext.Provider>
}