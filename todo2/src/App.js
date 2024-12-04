// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import TodoBanner from './TodoBanner';
import TodoCreator from './TodoCreator';
import TodoRow from './TodoRow';
import VisibilityControl from './VisibilityControl';
 
function App() {
 
  const [userName] = useState("Adam"); // change 1
 
  const [todoItems, setTodoItems] = useState([
    {action: "Buy Flowers", done: false},
    {action: "Get Shoes", done: false},
    {action: "Collect Tickets", done: true},
    {action: "Call Joe", done: false}
  ]);

  const [showCompleted, setShowCompleted] = useState(true);
 
  // change 2
  // const [newItemText, setNewItemText] = useState("");
 
  // change 3
  // const changeStateData = () => {
  //   setUserName((prevName) => (prevName === "Adam" ? "Bob" : "Adam"));
  // };
 
  // change 4
  // const updateNewTextValue = (event) => {
  //   setNewItemText(event.target.value);
  // };
 
  const createNewTodo = (task) => {
    if (!todoItems
      .find(item => item.action === task)
    )
    {
      setTodoItems([
        ...todoItems,
        { action: task, done: false }
      ]);
      // change 5
      // setNewItemText("");
    }
  };

  const toggleTodo = (todo) => {
    setTodoItems(todoItems.map((item) =>
      item.action === todo.action
        ? { ...item, done: !item.done }
        : item
    ));
  };

  const todoTableRows = (doneValue) => todoItems.filter(item => item.done === doneValue).map(item =>
   <TodoRow key={ item.action } item={ item } toggle={ toggleTodo } />
  )
 
  return (
    <div>
      <TodoBanner userName={ userName } todoItems={ todoItems } />

      <div class="m-3">
        <TodoCreator callback={ createNewTodo } />
      </div>
 
      <div class="container-fluid">
      

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th style={{ width: "75%" }}>Description</th>
            <th style={{ width: "25%" }}>Done</th>
            </tr>
          </thead>
          <tbody>
            { todoTableRows(false) }
          </tbody>
        </table>

        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            callback={(checked) => setShowCompleted(checked)} />
        </div>

        { showCompleted  &&
        <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ width: "75%" }}>Description</th>
            <th style={{ width: "25%" }}>Done</th>
          </tr>
        </thead>
          <tbody>
            { todoTableRows(true)}
          </tbody>
        </table>
        }
        
      </div>
    </div>
  );
}
 
export default App;