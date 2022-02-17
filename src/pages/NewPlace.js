import NewTravelPlaceForm from "../components/travelPlace/NewTravelPlaceForm";

function NewPlacePage(){
    function addTravelPlaceHandler(travelPlaceData){
        
    }

    return(
        <section>
            <h1>Add New Places</h1>
            <NewTravelPlaceForm onAddTravelPlace={addTravelPlaceHandler}/>
        </section>
    );
}

export default NewPlacePage;