//props
function Todo(props) {

    function deleteHandler(){
        
    }

  return(
  <div className="card">
      {/* dynamic content */}
    <h2>{props.text}</h2>
    <div className="actions">
        {/* to listen to button */}
      <button className="btn" onClick={deleteHandler}>Delete</button>
    </div>
  </div>
  );
}

export default Todo;
