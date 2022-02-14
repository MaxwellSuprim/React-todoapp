
import React, { useState } from 'react';


export const AddTodo = ({addTodo}) => {
    const [work,setWork] = useState("")
    const [place,setPlace]=useState("")

const submit=(e)=>{
    e.preventDefault();/*to stop rendering page*/
    if(!work||!place){
        alert("work or place is missing")
    }
    else{
    addTodo(work,place)
        // setWork=("")
        // setPlace=("")/*not working now*/
}
}



    return (
        
            <div className='container' >
            <h3> Add a todo  </h3>  
            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlFor="work" className="form-label">todo work</label>
                    <input type="text"  value={work} onChange={(e)=>setWork(e.target.value)} className="form-control" id="work" aria-describedby="emailHelp"/>
                      
                </div>
                <div className="mb-3">
                    <label htmlFor="place" className="form-label"> working Place</label>
                    <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)} className="form-control" id="place"/>
                </div>
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
                
        </div>
    )
    }
