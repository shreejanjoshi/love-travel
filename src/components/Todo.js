//state to change different state 
import {useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

//props
function Todo(props) {
    //mode is open or not and it should not be open
    const [ modelIsOpen, setModelIsOpen ] = useState(false);

    function deleteHandler(){
        //change current set to true
        setModelIsOpen(true);
    }

  return(
  <div className="card">
      {/* dynamic content */}
    <h2>{props.text}</h2>
    <div className="actions">
        {/* to listen to button */}
      <button className="btn" onClick={deleteHandler}>Delete</button>
    </div>
    {/* to use the state
        terery if else 
        if true model if not null
        or 
        if both conditionn is true then use 2nd value will be return
    */}
    { modelIsOpen && <Modal />}
    { modelIsOpen && <Backdrop />}
  </div>
  );
}

export default Todo;
