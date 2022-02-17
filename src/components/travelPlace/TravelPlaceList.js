import TravelPlaceItem from './TravelPlaceItem';
import classes from './TravelPlaceList.module.css'

function TravelPlaceList(props){
    return(
        <ul className={classes.list}>
            {/* place u can choose */}
            {props.places.map(place => 
                <TravelPlaceItem 
                    key={place.id} 
                    id={place.id} 
                    image={place.image} 
                    title={place.title}
                    address={place.address}
                    description={place.description}
                />
            )}
        </ul>
    );
}

export default TravelPlaceList;