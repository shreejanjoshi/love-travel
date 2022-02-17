import { useHistory } from 'react-router-dom';

import NewTravelPlaceForm from "../components/travelPlace/NewTravelPlaceForm";

function NewPlacePage(){
    //gives history obj which expose certin  methods that allow to manipulate the bower history to nav it away
    const history = useHistory();

    function addTravelPlaceHandler(travelPlaceData){
        //sending http request we can use fetch function
        //fetch is get request we need post request
        //return promis
        fetch(
            'https://lovel-travel-default-rtdb.europe-west1.firebasedatabase.app/travelplace.json', 
            {
                method: 'POST',
                //we also add data to request data which we wanna store
                //create json
                body: JSON.stringify(travelPlaceData),
                headers: {
                    //extra meta data to make it more clear this is request carry json data
                    'Content-Type': 'application/json'
                },
            }
        ).then(() =>{
            //nav it away but wont allow us to use back button
            history.replace('/');
        });
    }

    return(
        <section>
            <h1>Add New Places</h1>
            <NewTravelPlaceForm onAddTravelPlace={addTravelPlaceHandler}/>
        </section>
    );
}

export default NewPlacePage;