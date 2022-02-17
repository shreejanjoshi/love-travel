import classes from './NewTravelPlaceForm.module.css';
import Card from '../ui/Card';

function NewTravelPlaceForm(){
    return(
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Place Name</label>
                    <input type="text" required id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Place Image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>address</label>
                    <input type="text" required id="address" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5'></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Place</button>
                </div>
            </form>
        </Card>
    );
}

export default NewTravelPlaceForm;