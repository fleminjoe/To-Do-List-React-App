import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

function App() {

  
  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodods] = useState([]);
  

  useEffect(()=>{
    getLocalStorage();
     } ,[])

  useEffect(()=>{
    filterHander();
    saveLocalStorage();
  },[todos,status])

  const filterHander = ()=> {

    switch(status){
      case 'completed':
        setFilteredTodods(todos.filter((item)=>(item.completed === true)));
        break;
      case 'uncompleted':
        setFilteredTodods(todos.filter((item)=>(item.completed === false)));
        break;
      default:
        setFilteredTodods(todos);
        break;
    }

  }

  const saveLocalStorage = ()=>{

      localStorage.setItem('todos',JSON.stringify(todos))
    
  }
  const getLocalStorage = ()=>{
    let local = JSON.parse(localStorage.getItem('todos')) 
      if(local === null){
        localStorage.setItem('todos',[])
      }else{
        setTodos(local);
        // console.log(local);
      }
    
  }

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form  inputText={inputText} 
             setInputText={setInputText} 
             todos={todos} 
             setTodos={setTodos}
             setStatus={setStatus}
       />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
