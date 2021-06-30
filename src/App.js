import "./App.css";
import ListToDo from "./components/ListToDos";
import AddToDo from "./components/AddToDo";

function App() {
  return (
    <div className="App text-red-600 mt-16  ">
      <div>
        <AddToDo />
        <ListToDo />
      </div>
    </div>
  );
}

export default App;
