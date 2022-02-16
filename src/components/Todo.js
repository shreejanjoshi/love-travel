//props
function Todo(props) {
  return(
  <div className="card">
      {/* dynamic content */}
    <h2>{props.text}</h2>
    <div className="actions">
      <button className="btn">Delete</button>
    </div>
  </div>
  );
}

export default Todo;
