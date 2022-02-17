import {useState, useEffect} from'react';

import TravelPlaceList from "../components/travelPlace/TravelPlaceList";

function AllPlacesPage(){
    //1 currecent state snapshote and 2 is a function to updatinge state 
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTravelPlaces, setLoadedTravelPlaces] = useState([]);

    //1st arrgument pass useEffect will be excute by react only on condition
    useEffect(() => {
      //when if this effect will run again we set this to true again
      setIsLoading(true);
    //store data from databse
    //wanna send request to get data
    fetch(
      'https://lovel-travel-default-rtdb.europe-west1.firebasedatabase.app/travelplace.json'
      ).then(response => {
          //json it return promis as well so
          return response.json();
      }).then((data) =>{
          const travelPlaces = [];
          //key is uqniek id 
          for(const key in data){
            const travelPlace = {
              id: key,
              ...data[key]
            };

            travelPlaces.push(travelPlace);
          }

          //then get acture data
          setIsLoading(false);
          setLoadedTravelPlaces(travelPlaces);
      });
      // 2nd rect will check and compare them to their eqivalents when this effect fucntion was excuted lasta time
    }, []);

        if(isLoading){
          return(
            <section>
              <p>Loading...</p>
            </section>
          );
        }

    return(
        <section>
            <h1>All Meetups</h1>
            <ul>
                <TravelPlaceList travelPlaces={loadedTravelPlaces}/>
            </ul>
        </section>
    );
}

export default AllPlacesPage;
