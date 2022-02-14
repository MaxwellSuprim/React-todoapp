import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    
    return (
        <>
        
        <div>
           
            <p> ID:    { todo._id}<br/>     {/*becoz in ongodb _id vayera save vako hunxa*/    }
           ACTIVITY:  {todo.activity}<br/>
            PLACE: { todo.place}</p>
                 <button className=" btn btn-danger" onClick={(e)=>onDelete(todo._id)}>Danger</button>{/*arrow function used beco
                 z only onclick event call hous vanera esle function matra use garda auto render vayera pailai aaoxa*/}
                 
                  </div>
                  
         </>         
    )
}
