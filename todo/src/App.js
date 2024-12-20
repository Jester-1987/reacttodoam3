// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
 
function App() {
 
  const [userName, setUserName] = useState("Adam");
 
  const [todoItems, setTodoItems] = useState([{action: "Buy Flowers", done: false},
    {action: "Get Shoes", done: false},
    {action: "Collect Tickets", done: true},
    {action: "Call Joe", done: false}
  ]);
 
  const [newItemText, setNewItemText] = useState("");
 
  const changeStateData = () => {
    setUserName((prevName) => (prevName === "Adam" ? "Bob" : "Adam"));
  };
 
  const updateNewTextValue = (event) => {
    setNewItemText(event.target.value);
  };
 
  const createNewTodo = () => {
    if (!todoItems
      .find(item => item.action === newItemText)
    )
    {
      setTodoItems([
        ...todoItems,
        { action: newItemText, done: false }
      ]);
      setNewItemText("");
    }
  }
 
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {userName}'s To Do List
        ({todoItems.filter(t => !t.done).length} items to do)
      </h4>
 
      <div class="container-fluid">
        <div className="my-1">
          <input className="form-control"
            value={newItemText}
            onChange={updateNewTextValue} />
          <button className="btn btn-primary mt-1"
            onClick={ createNewTodo }>
            Add
          </button>
        </div>
        
      </div>
    </div>
  );
}
 
export default App
