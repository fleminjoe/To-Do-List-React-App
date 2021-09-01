
import React from 'react';

export default function Todo({todo, text, todos, setTodos}) {

    const deleteHandler = (event)=>{
        
        setTodos(todos.filter((item)=> item.id !== todo.id ) );
                               
        // console.log();                      
    };

    const completeHandler = (event)=>{
        setTodos(todos.map((item)=> {
            if(item.id === todo.id){
                return {...item, completed: !item.completed} 
            } ;
            return  item ;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed': ''}`}>{text}
            </li>
            <button className="complete-btn" onClick={completeHandler} >
                <i className="fas fa-check"></i>
            </button>
                <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
