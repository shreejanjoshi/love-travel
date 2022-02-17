import TravelPlaceItem from './TravelPlaceItem';
import classes from './TravelPlaceList.module.css'

function TravelPlaceList(props){
    return(
        <ul className={classes.list}>
            {/* place u can choose */}
            {props.places.map(travelPlace => 
                <TravelPlaceItem 
                    key={travelPlace.id} 
                    id={travelPlace.id} 
                    image={travelPlace.image} 
                    title={travelPlace.title}
                    address={travelPlace.address}
                    description={travelPlace.description}
                />
            )}
        </ul>
    );
}

export default TravelPlaceList;