# love-travel
Add Places you want to visit - with React

```
```

Before I started to make this Love travel project. I also made this mini project to understant the work flow React.

1st in the App.js I wrote few html code. 

 ``` 
    function App() {
        return (
            <div>
            <h1>My Todos</h1>
            <div>
                <h2>Title</h2>
                <div>
                <button>Delete</button>
                </div>
            </div>
            </div>
        );
    }

    export default App;
```

After that instead of writing todo html code there, I made new folder with name components and made new js file with todo. 

app.js

```
import Todo from "./components/Todo";

//stander js function but reurn jsx code
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

export default App;

```

todo.js

```
function Todo() {
  return(
  <div className="card">
    <h2>Title</h2>
    <div className="actions">
      <button className="btn">Delete</button>
    </div>
  </div>
  );
}

export default Todo;
```
