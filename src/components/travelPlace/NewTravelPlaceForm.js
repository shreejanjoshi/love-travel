import { useRef  } from 'react';

import classes from './NewTravelPlaceForm.module.css';
import Card from '../ui/Card';

function NewTravelPlaceForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    // event automatically from all those event onsubmit
    function submitHandler(event){
        event.preventDefault();

        // current.value hold alturent value
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const travelPlaceData = {
            //store the data
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddTravelPlace(travelPlaceData);
    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Place Name</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Place Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Place</button>
                </div>
            </form>
        </Card>
    );
}

export default NewTravelPlaceForm;