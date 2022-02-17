import classes from './Card.module.css'

function Card(props){
    return (
    <div className={classes.card}>
        {/* children holds all th content */}
        {props.children}
    </div>
    );
}

export default Card;