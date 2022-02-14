
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const [todos, setTodos] = useState([])/*setTodos updates the todos each time*/

  const onDelete = (id) => {
    console.log(id, "yo id ho")
    axios.delete(`http://localhost:4000/work/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const  tempTodos = todos.filter(item => item.id !== id);
        setTodos(tempTodos);
      })
    console.log("i am on delete", id)




  }
  const addTodo = (work, place) => { /*geeting these from form of addTodo*/
    console.log("adding", work, place)
    /* let time
     if(todos.length===0)
     {
       time=0
     }
     else
     { time=todos[todos.length-1].time+1}*/
    const myTodo = {
      //time:time,
      work: work,
      place: place
    }
    // setTodos([...todos,myTodo])/*todos ma myTodo add garne*/
    // console.log(myTodo)

    axios.post("http://localhost:4000/work", myTodo)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })

  }




  useEffect(() => {
    axios.get("http://localhost:4000/work")
      .then(response => {
        console.log(response,"yo ho bro response")
        setTodos(response.data)

      })
      .catch(error => {
        console.log(error)
      })
  }, [todos])

  return (
    <>

      <Router>
        <Header title="my today list" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                {<AddTodo addTodo={addTodo} />}
                {<Todos todos={todos} onDelete={onDelete} />}{/*passing todoes AS javascript object*/}

              </>)
          }}>

          </Route>
          <Route exact path="/About">
            {<About />}
          </Route>
        </Switch>


        <Footer />
      </Router>

    </>
  );
}

export default App;
