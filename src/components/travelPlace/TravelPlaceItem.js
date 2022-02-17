import classes from './TravelPlaceItem.module.css'
import Card from '../ui/Card';

//context hook allows us to establish a connection between this componeneta and the context
import { useContext } from 'react';
import VisitedContext from '../../store/visited-context';

function TravelPlaceItem(props){

    //data from context
    //visited-context  const context store in this visitedCtx
    const visitedCtx = useContext(VisitedContext);

    //return true or false
    const itemIsVisited = visitedCtx.itemIsVisited(props.id);

    function toggleVisitedStatusHandler(){
        if(itemIsVisited){
            visitedCtx.removeVisited(props.id);
        }else{
            visitedCtx.addVisited({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleVisitedStatusHandler}>{itemIsVisited ? 'Remove' : 'Visited'}</button>
                </div>
            </Card>
        </li>
    );
}

export default TravelPlaceItem;
