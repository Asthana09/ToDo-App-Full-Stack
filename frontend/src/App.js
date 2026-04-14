import { useState, useEffect } from "react";  //useeffect -> call api
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import API from "./config";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";


// function component -App -> main component -runs when app loads
function App() {
  const [text, setText] = useState(""); // todoinput - for the use of child component
  const [todos, setTodos]= useState([]); // todolist


  //function 1
  const addTodo = async()=>{  //async because api call take time
    if(!text) return;   // function will strop if text is empty

    const res= await fetch(`${API}/api/todos`,{  //sending req to backend
      method:"POST",
      headers:{
        "Content-Type":"application/json",        //tell backend->  sending JSON
      },
      body : JSON.stringify({text}),           //convert js object -> JSON String
    });
    const data = await res.json();             //backend send res convert to json
    console.log("from Backend:" , data);
  setTodos(prev => [...prev, data]);          // spread old data , data-> new data
    setText("");                             //clear input box
  };



  //function 2 *********** DElete fxn
const deleteTodo = async (id) => {
  console.log("DELETE ID:", id);   

  await fetch(`${API}/api/todos/${id}`, {        //delete from db
    method: "DELETE",
  });
  //update UI
  const res = await fetch(`${API}/api/todos`);    //fetch updated list
  const data = await res.json();
  setTodos(data);                           //replace ui with fresh data
};



//function  *********** 3 Toggle 
const toggleTodo = async (id) => { 
  await fetch(`${API}/api/todos/${id}`, {  
    method: "PUT",
  });

  // refetch fresh data
  const res = await fetch(`${API}/api/todos`);
  const data = await res.json();
  setTodos(data);
};


//run when component loads
useEffect(() => {
  fetch(`${API}/api/todos`)    //call backend
    .then(res => res.json())   //convert res
    .then(data => setTodos(data));  //store in state -> UI update
}, []);


 return (
  <Router>
    <Routes>
      <Route 
      path="/"
      element={           //element will hold which will go on ui 
        <>               
        {/* <></>   is fragment, because react need one parent , so it will wrap multiple elements */}
        <Header/>
        <TodoInput text={text} setText={setText} addTodo={addTodo}/>

        <Todolist todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        </>
      }
      />
      
    </Routes>
  </Router>
//</div>
 );
}

export default App;

