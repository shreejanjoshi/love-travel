import { useContext } from 'react';
import VisitedContext from '../store/visited-context';
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
        content = <TravelPlaceList travelPlace={visitedCtx.vistied} />;
    }

    return(
        <section>
            <h1>Visited</h1>
            {content}
        </section>
    );
}

export default VisitedPage;