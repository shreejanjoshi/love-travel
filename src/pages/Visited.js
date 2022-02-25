import { useContext } from 'react';
import VisitedContext from '../components/store/visited-context';
import TravelPlaceList from '../components/travelPlace/TravelPlaceList';

function VisitedPage(){
    //that give us the current context snapshot 
    //get visted context
    const visitedCtx = useContext(VisitedContext);
    
    //show message
    let content;

    if(visitedCtx.totalVisited === 0){
        content = <p>You havn't visited any place yet.</p>;
    }else{
        content = <TravelPlaceList travelPlaces={visitedCtx.visited} />;
    }

    return(
        <section>
            <h1>Visited</h1>
            {content}
        </section>
    );
}

export default VisitedPage;
