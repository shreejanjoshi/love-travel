import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

//stander js function but reurn jsx code
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Complete React'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
