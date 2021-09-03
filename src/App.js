 import React from 'react'
 import "./App.css"
 import AddTodo from "./components/AddTodo/AddTodo"
 import List from "./components/List/List"
 function App() {
   return (
     <>
     <h1 className="title monika">TODO APP</h1>
       <AddTodo/>
       <List/>
     </>
   )
 }
 
 export default App
 