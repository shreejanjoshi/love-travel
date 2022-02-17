import {useState} from'react';

import TravelPlaceList from "../components/travelPlace/TravelPlaceList";

function AllPlacesPage(){
    //1 currecent state snapshote and 2 is a function to updatinge state 
    const [isloading, setIsLoading] = useState(true);
    const [loadedTravelPlace, setLoadedTravelPlace] = useState([]);

    //store data from databse
    //wanna send request to get data
    fetch(
        'https://lovel-travel-default-rtdb.europe-west1.firebasedatabase.app/travelplace.json'
        ).then(response => {
            //json it return promis as well so
            return response.json();
        }).then((data) =>{
            //then get acture data
            setIsLoading(false);
            setLoadedTravelPlace(data);
        });

        if(isloading){
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
                <TravelPlaceList places={loadedTravelPlace}/>
            </ul>
        </section>
    );
}

export default AllPlacesPage;