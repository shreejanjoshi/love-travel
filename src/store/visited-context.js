import { createContext, useState } from "react";

// V contain react component
const VistiedContext = createContext({
    vistied: [],
    totalVisited: 0
});

//provding this context to all the compoenent that arae interested in listing the value and updating context value
function VistiedContextProvider(props){

    const [userVisted, setUserVisited] = useState([]);

    function addVisitedHandler(visitedTavelPlace){
        //concat is like push but return new array with that added meetup
        //get latest snapshot
        setUserVisited((prevUserVisited) => {
            return prevUserVisited.concat(visitedTavelPlace);
        })
    }

    function removeVisitedHandler(travelPlaceId){
        setUserVisited(prevUserVisited =>{
            //get new array
            //drop that item
            return prevUserVisited.filter(travelPlace => travelPlace.id != travelPlaceId);
        });
    }

    function itemIsVisitedHandler(travelPlaceId){
        //some build in funcution
        return userVisted.some(travelPlace => travelPlace.id === travelPlaceId);
    }

    const context = {
        favorites: userVisted,
        totalVisited: userVisted.length,
    };

    //letest value
    return <VistiedContext.Provider value={context}>
        {props.children}
    </VistiedContext.Provider>
}