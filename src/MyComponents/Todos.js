import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
        <h3 className= "my-3">TO DO LIST</h3>
        {/*{props.todos}*/}
      {  props.todos.length===0? "no todo to display":
        props.todos.map((todo)=>{   /*accesses all array inside todos maps it to todo*/
            return(
               <> <h3>Hi</h3>
                <TodoItem todo={todo} key={todo.time} onDelete={props.onDelete}/> {/*sends todo and ondelete to TodoItem.js*/}
            </>)
        })}
    
        </div>
    )
}
