import { createContext, useState } from "react";

// V contain react component
const VisitedContext = createContext({
    visited: [],
    totalVisited: 0,

    addVisited: (visitedTravelPlace) => {},
    removeVisited: (travelPlaceId) => {},
    itemIsVisited: (travelPlaceId) => {}
});

//provding this context to all the compoenent that arae interested in listing the value and updating context value
export function VisitedContextProvider(props){

    const [userVisited, setUserVisited] = useState([]);

    function addVisitedHandler(visitedTravelPlace){
        //concat is like push but return new array with that added meetup
        //get latest snapshot
        setUserVisited((prevUserVisited) => {
            return prevUserVisited.concat(visitedTravelPlace);
        })
    }

    function removeVisitedHandler(travelPlaceId){
        setUserVisited(prevUserVisited =>{
            //get new array
            //drop that item
            return prevUserVisited.filter(travelPlace => travelPlace.id !== travelPlaceId);
        });
    }

    function itemIsVisitedHandler(travelPlaceId){
        //some build in funcution
        return userVisited.some(travelPlace => travelPlace.id === travelPlaceId);
    }

    const context = {
        favorites: userVisited,
        totalVisited: userVisited.length,
        //so dont excute the function but point at it
        addVisited: addVisitedHandler,
        removeVisited: removeVisitedHandler,
        itemIsVisited: itemIsVisitedHandler,
    };

    //letest value
    return(
    <VisitedContext.Provider value={context}>
        {props.children}
    </VisitedContext.Provider>
    );
}

export default VisitedContext;
